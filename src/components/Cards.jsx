import React from 'react';

const Cards = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <div className="col">
      <div className="card shadow-lg h-100 border-3 border-dark rounded-3" style={{ transition: 'transform 0.2s', cursor: 'pointer' }}>
        
        {/* Cabecera con nombre */}
        <div className="card-header bg-primary text-white text-center rounded-top-2">
          <h5 className="mb-0">{pokemon.name}</h5>
        </div>

        {/* Imagen */}
        <div className="text-center p-3 bg-light">
          <img
            src={pokemon.image}
            alt={`Imagen de ${pokemon.name}`}
            className="card-img-top"
            style={{ maxHeight: '150px', width: 'auto' }}
            onError={(e) => { e.target.src = 'https://placehold.co/150x150/0d6efd/ffffff?text=No+Image'; }}
          />
        </div>

        {/* Datos del clima */}
        <div className="card-body p-0">
          <ul className="list-group list-group-flush border-top">
            <li className="list-group-item d-flex justify-content-between">
              <strong>Temperatura:</strong> <span className="badge bg-info text-dark">{pokemon.temperature}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Viento:</strong> <span className="badge bg-warning text-dark">{pokemon.windspeed}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Condición:</strong> <span className="badge bg-success">{pokemon.condition}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <strong>Fuente:</strong> <span className="text-muted">Open-Meteo</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;

