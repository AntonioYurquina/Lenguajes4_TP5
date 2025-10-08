import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardsTP({ trabajos }) {
  const navigate = useNavigate();

  const handleVerClick = (tp) => {
    alert(`Se verá la consigna desarrollada en este proyecto:\n\n${tp.descripcion}`);
    navigate(tp.pagina, { state: { tp } }); // redirige y pasa el TP como estado
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">TRABAJOS PRÁCTICOS</h1>
      <div className="row">
        {trabajos.map((tp) => (
          <div className="col-md-6 col-lg-4 mb-4" key={tp.numero}>
            <div className="card shadow-lg border-0 h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title text-primary">
                    TP {tp.numero}: {tp.nombre}
                  </h5>
                  <p className="card-text text-secondary">
                    <strong>Profesor:</strong> {tp.profesor}
                  </p>
                  <p className="card-text">{tp.descripcion}</p>
                </div>

                <div className="mt-3">
                  <a
                    href={tp.repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm me-2"
                  >
                    Repositorio
                  </a>

                  <button
                    onClick={() => handleVerClick(tp)}
                    className="btn btn-primary btn-sm"
                  >
                    {tp.botonNombre}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
