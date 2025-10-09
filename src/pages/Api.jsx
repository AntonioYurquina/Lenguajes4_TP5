import React, { useState, useEffect, useMemo } from 'react';
import Cards from '../components/Cards.jsx';

// Lista de ciudades argentinas con sus coordenadas e imagen representativa
const CITIES = [
  { name: 'Salta', lat: -24.79, lon: -65.41, image: 'https://placehold.co/200x150/00aaff/ffffff?text=Salta' },
  { name: 'Buenos Aires', lat: -34.61, lon: -58.38, image: 'https://placehold.co/200x150/007bff/ffffff?text=Buenos+Aires' },
  { name: 'Córdoba', lat: -31.41, lon: -64.18, image: 'https://placehold.co/200x150/008080/ffffff?text=Córdoba' },
  { name: 'Mendoza', lat: -32.89, lon: -68.83, image: 'https://placehold.co/200x150/ff8800/ffffff?text=Mendoza' },
  { name: 'Tucumán', lat: -26.83, lon: -65.22, image: 'https://placehold.co/200x150/00aa55/ffffff?text=Tucumán' },
];

const Api = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carga de datos desde Open-Meteo
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const results = await Promise.all(
          CITIES.map(async (city) => {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
            const res = await fetch(url);
            if (!res.ok) throw new Error('Error al obtener datos');
            const data = await res.json();

            const weather = data.current_weather;
            return {
              id: city.name,
              name: city.name,
              temperature: `${weather.temperature} °C`,
              windspeed: `${weather.windspeed} km/h`,
              condition: weather.weathercode <= 2 ? 'Despejado' :
                         weather.weathercode <= 45 ? 'Nublado' :
                         weather.weathercode <= 67 ? 'Lluvia Ligera' : 'Tormenta',
              image: city.image,
            };
          })
        );
        setWeatherData(results);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los datos meteorológicos.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchWeatherData();
  }, []);

  // Filtrado de búsqueda
  const filteredData = useMemo(() => {
    if (!searchTerm) return weatherData;
    return weatherData.filter((city) =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [weatherData, searchTerm]);

  // Cargando
  if (isLoading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2">Obteniendo datos meteorológicos...</p>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">{error}</div>
      </div>
    );
  }

  // Render principal
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center text-primary">Clima Actual - Ciudades Argentinas</h1>

      {/* Barra de búsqueda */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control form-control-lg shadow-sm border-primary"
          placeholder="Buscar ciudad..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Mensaje si no hay coincidencias */}
      {filteredData.length === 0 && (
        <div className="alert alert-warning text-center">
          No se encontraron ciudades con el nombre "{searchTerm}".
        </div>
      )}

      {/* Grid de tarjetas */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredData.map((city) => (
          <Cards key={city.id} pokemon={city} />
        ))}
      </div>
    </div>
  );
};

export default Api;

