// Servicios.jsx
import React from "react";

// Importar imágenes locales
import suiteDeluxe from "../assets/SuiteDeluxe.jpg";
import habitacionStandard from "../assets/HabitacionStandard.webp";
import habitacionIndividual from "../assets/HabitacionIndividual.jpg";

// Array de habitaciones con imágenes locales
const habitaciones = [
  {
    id: 1,
    nombre: "Suite Deluxe",
    descripcion: "Disfrute de una experiencia de lujo con nuestra Suite Deluxe, equipada con cama king, baño privado y un balcón con vistas espectaculares.",
    precio: "$1500/noche",
    imagenes: [suiteDeluxe],
  },
  {
    id: 2,
    nombre: "Habitación Standard",
    descripcion: "Cómoda y elegante, nuestra Habitación Standard ofrece una cama doble y baño compartido, perfecta para estancias relajadas y funcionales.",
    precio: "$900/noche",
    imagenes: [habitacionStandard],
  },
  {
    id: 3,
    nombre: "Habitación Individual",
    descripcion: "Habitación acogedora diseñada para una persona, ideal para viajes de negocios o estancias cortas con todas las comodidades necesarias.",
    precio: "$700/noche",
    imagenes: [habitacionIndividual],
  },
];

function Servicios() {
  return (
    <div className="container py-5">
      {/* Encabezado de bienvenida */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Bienvenido a Hotel Trivago</h1>
        <p className="lead">
          Descubra el confort, la elegancia y el servicio excepcional que ofrecemos. 
          Desde habitaciones de lujo hasta opciones más funcionales, cada estancia está diseñada para su comodidad y satisfacción.
        </p>
      </div>

      {/* Sección de habitaciones */}
      <h2 className="mb-4 text-center">Nuestras Habitaciones</h2>
      <div className="row g-4">
        {habitaciones.map((hab) => (
          <div key={hab.id} className="col-md-4">
            <div className="card h-100 shadow-sm">
              {/* Carousel de imágenes */}
              <div id={`carousel-${hab.id}`} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {hab.imagenes.map((img, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <img src={img} className="d-block w-100" alt={`${hab.nombre} ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Información de la habitación */}
              <div className="card-body">
                <h5 className="card-title">{hab.nombre}</h5>
                <p className="card-text">{hab.descripcion}</p>
                <p className="card-text fw-bold">{hab.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mapa con marcador */}
      <h3 className="mt-5 mb-3 text-center">Nuestra Ubicación</h3>
      <div className="map-container mb-5" style={{ height: "400px" }}>
        <iframe
          src="https://www.google.com/maps?q=-24.7821,-65.4119&hl=es&z=15&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación del Hotel"
        ></iframe>
      </div>
    </div>
  );
}

export default Servicios;

