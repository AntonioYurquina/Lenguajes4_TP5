import React, { useState, useEffect, useMemo } from 'react';
import Cards from '../components/Cards.jsx'; // Importamos el componente de las tarjetas

// URL base para obtener una lista de los primeros n Pokémones, yo le pongo 20 para verificar que anda
const POKEMON_LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20';

/**
 * Componente que obtiene, filtra y muestra una lista detallada de Pokémon de la PokeAPI.
 */
const Api = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect para la obtención inicial de datos
    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                // 1. Obtener la lista inicial de nombres y URLs
                const listResponse = await fetch(POKEMON_LIST_URL);
                if (!listResponse.ok) {
                    throw new Error(`Error al obtener la lista: ${listResponse.statusText}`);
                }
                const listData = await listResponse.json();
                const results = listData.results || [];

                // 2. Mapear y obtener los detalles para cada Pokémon en paralelo (Promise.all)
                const detailPromises = results.map(async (pokemon) => {
                    const detailResponse = await fetch(pokemon.url);
                    if (!detailResponse.ok) {
                        // Devolvemos un objeto con error si la URL de detalle falla
                        return { name: pokemon.name, error: true };
                    }
                    const detailData = await detailResponse.json();
                    
                    // Procesar los 4 campos mínimos + imagen
                    return {
                        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
                        id: detailData.id,
                        height: (detailData.height * 0.1).toFixed(2), // Decímetros a metros (Campo 1)
                        weight: (detailData.weight * 0.1).toFixed(2), // Hectogramos a kilogramos (Campo 2)
                        image: detailData.sprites.front_default || 'https://placehold.co/150x150/0d6efd/ffffff?text=No+Image', // Imagen Obligatoria
                    };
                });

                // Esperar a que se resuelvan todas las promesas de detalle
                const detailedPokemon = await Promise.all(detailPromises);
                // Filtramos cualquier error que pudiera haber ocurrido en la llamada de detalle
                setPokemonList(detailedPokemon.filter(p => !p.error)); 
                
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("No se pudieron cargar los datos de la lista de Pokémon.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemonData();
    }, []); // Se ejecuta solo una vez al montar el componente

    // useMemo para filtrar la lista cada vez que cambie pokemonList o searchTerm
    const filteredPokemon = useMemo(() => {
        if (!searchTerm) {
            return pokemonList;
        }
        const lowerCaseSearch = searchTerm.toLowerCase();
        
        // Aplicamos el filtro por nombre
        return pokemonList.filter(pokemon => 
            pokemon.name.toLowerCase().includes(lowerCaseSearch)
        );
    }, [pokemonList, searchTerm]);

    // Lógica de Renderizado Condicional: Carga
    if (isLoading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="mt-2">Cargando lista de Pokémon...</p>
            </div>
        );
    }

    // Lógica de Renderizado Condicional: Error
    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }
    
    // Lógica de Renderizado Principal
    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center text-primary">Catálogo de Pokémon Coleccionables</h1>

            {/* Componente de Búsqueda (Filtro) */}
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control form-control-lg shadow-sm border-primary"
                    placeholder="Buscar Pokémon por nombre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            
            {/* Mensaje si no hay resultados */}
            {filteredPokemon.length === 0 && (
                <div className="alert alert-warning text-center" role="alert">
                    No se encontraron Pokémon que coincidan con "{searchTerm}".
                </div>
            )}

            {/* Grid para las Tarjetas Coleccionables */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {/* Recorremos la lista filtrada y pasamos cada Pokémon al componente Cards */}
                {filteredPokemon.map((pokemon) => (
                    <Cards key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default Api;
