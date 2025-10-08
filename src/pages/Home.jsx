// Home.jsx
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [files, setFiles] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleFileChange = (event) => {
    const loadedFiles = Array.from(event.target.files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
    }));
    setFiles((prev) => [...prev, ...loadedFiles]);
  };

  return (
    <div className="container py-4">
      {/* Título principal */}
      <h1 className="text-center mb-4">Bienvenido al TP3 de Lenguajes IV</h1>
      <p className="text-center mb-5">
        Este trabajo práctico incluye un menú de navegación, una página de contacto con formulario,
        el uso del servicio <strong>EmailJS</strong> para envío de correos electrónicos, y un visor
        de archivos desarrollado en el TP2.
      </p>

      {/* Visor de Archivos TP2 */}
      <div className="text-center mb-5">
        <h2 className="mb-4">Trabajo Práctico N°2 - Visor de Archivos</h2>

        {/* Input para cargar archivos */}
        <div className="mb-4">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            accept="image/*,video/*,application/pdf"
            className="form-control"
          />
        </div>

        {/* Lista de archivos */}
        <div className="row g-3 justify-content-center">
          {files.map((file, index) => (
            <div
              key={index}
              className={`col-4 col-md-3 border rounded p-2 ${selected === file ? "border-primary" : ""}`}
              style={{ cursor: "pointer" }}
              onClick={() => setSelected(file)}
            >
              {file.type.startsWith("image/") ? (
                <img src={file.url} alt={file.name} className="img-fluid rounded" />
              ) : file.type.startsWith("video/") ? (
                <video src={file.url} className="img-fluid rounded" />
              ) : (
                <div className="bg-light rounded p-3">📄 {file.name}</div>
              )}
            </div>
          ))}
        </div>

        {/* Vista en grande */}
        {selected && (
          <div className="mt-5 text-center">
            <h3 className="mb-3">{selected.name}</h3>
            {selected.type.startsWith("image/") ? (
              <img src={selected.url} alt={selected.name} className="img-fluid rounded shadow" />
            ) : selected.type.startsWith("video/") ? (
              <video src={selected.url} controls className="img-fluid rounded shadow" />
            ) : (
              <iframe
                src={selected.url}
                className="w-100 rounded shadow"
                style={{ height: "70vh" }}
                title={selected.name}
              ></iframe>
            )}
          </div>
        )}

        {/* Botón para modal */}
        <button
          type="button"
          className="btn btn-primary mt-5"
          data-bs-toggle="modal"
          data-bs-target="#mensajeModal"
        >
          Ver Mensaje para el Profesor
        </button>

        {/* Modal */}
        <div className="modal fade" id="mensajeModal" tabIndex="-1" aria-labelledby="mensajeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="mensajeModalLabel">Mensaje para el Profesor</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
              </div>
              <div className="modal-body">
                Profesor, este es mi trabajo práctico N°2.  
                Fue realizado con React + Vite y utiliza Bootstrap para los estilos.  
                ¡Espero que sea de su agrado!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

