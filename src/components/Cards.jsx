import React from 'react';

/**
 * Componente funcional para renderizar una tarjeta individual de Pokémon,
 * diseñada para emular una carta coleccionable con detalles.
 * @param {object} props - Propiedades del componente.
 * @param {object} props.pokemon - Objeto con los datos del Pokémon (name, id, height, weight, image).
 */
const Cards = ({ pokemon }) => {
    // Aseguramos que el objeto pokemon sea válido antes de acceder a sus propiedades.
    if (!pokemon) {
        return null;
    }

    return (
        // Estilo de columna para el grid de Bootstrap
        <div className="col">
            <div className="card shadow-lg h-100 border-3 border-dark rounded-3" style={{ transition: 'transform 0.2s', cursor: 'pointer' }}>
                
                {/* Cabecera de la carta con el nombre */}
                <div className="card-header bg-primary text-white text-center rounded-top-2">
                    <h5 className="mb-0">{pokemon.name} <span className="badge bg-light text-dark ms-2">#{pokemon.id}</span></h5>
                </div>
                
                {/* Imagen (Obligatoria) */}
                <div className="text-center p-3 bg-light">
                    <img 
                        src={pokemon.image} 
                        className="card-img-top" 
                        alt={`Imagen de ${pokemon.name}`} 
                        style={{ maxHeight: '150px', width: 'auto' }}
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/0d6efd/ffffff?text=No+Image'; }}
                    />
                </div>
                
                <div className="card-body p-0">
                    <ul className="list-group list-group-flush border-top">
                        {/* Campo 1: Altura */}
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <strong>Altura:</strong> 
                            <span className="badge bg-info text-dark">{pokemon.height} m</span>
                        </li>
                        {/* Campo 2: Peso */}
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <strong>Peso:</strong> 
                            <span className="badge bg-warning text-dark">{pokemon.weight} kg</span>
                        </li>
                        {/* Campo 3: Origen */}
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <strong>Fuente:</strong> 
                            <span className="text-muted">PokeAPI</span>
                        </li>
                         {/* Campo 4: Tipo de Objeto */}
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <strong>Tipo:</strong> 
                            <span className="badge bg-success">Digital</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;
