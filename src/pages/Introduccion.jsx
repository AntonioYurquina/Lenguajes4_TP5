import React from "react";

export default function Introduccion() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-4">Trabajo Práctico N°1 - Lenguaje IV</h1>

      <h4 className="mb-3">Datos del Trabajo</h4>
      <p><strong>Universidad:</strong> Universidad Católica de Salta</p>
      <p><strong>Carrera:</strong> Ingeniería en Informática</p>
      <p><strong>Cátedra:</strong> Lenguaje IV</p>
      <p><strong>Docente:</strong> Lic. Carlos Pacheco</p>

      <hr />

      <h4 className="mb-3">Consigna</h4>
      <ol>
        <li>Crear una página HTML básica con un botón <code>file</code> para subir imágenes.</li>
        <li>Validar que el archivo sea una imagen y mostrarlo en la página.</li>
        <li>Subir el proyecto a GitHub y publicarlo.</li>
        <li>Subir la URL del repositorio y de la página publicada a la plataforma de la universidad.</li>
      </ol>

      <hr />

      <h4 className="mb-3">Cómo se hizo en React</h4>
      <p>
        Se creó un proyecto con <code>create-react-app</code> y un componente principal que contiene la estructura de la página. 
        Se implementó un input de tipo file, se validó el archivo como imagen y se mostró dinámicamente usando la API File.
      </p>

      <hr />

      <h4 className="mb-3">Comandos para build y deploy</h4>
      <pre>
        <code>
{`# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# Generar build para producción
npm run build

# Subir el build a GitHub Pages o Vercel`}
        </code>
      </pre>

      <hr />

      <h4>Enlaces</h4>
      <p>
        <strong>Repositorio:</strong>{" "}
        <a href="https://github.com/AntonioYurquina/Lenguajes4_TP1/settings/pages" target="_blank" rel="noopener noreferrer">
          https://github.com/AntonioYurquina/Lenguajes4_TP1/settings/pages
        </a>
      </p>
      <p>
        <strong>Página publicada:</strong>{" "}
        <a href="https://antonioyurquina.github.io/Lenguajes4_TP1/" target="_blank" rel="noopener noreferrer">
          https://antonioyurquina.github.io/Lenguajes4_TP1/
        </a>
      </p>
    </div>
  );
}
