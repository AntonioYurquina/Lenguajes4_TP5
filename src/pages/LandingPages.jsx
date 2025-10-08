import React from "react";
import CardsTP from "../components/CardsTP";

// Array de trabajos prácticos con rutas y repositorio
const trabajosPracticosData = [
  {
    numero: 1,
    nombre: "TP1 - Subida de Imagen HTML",
    profesor: "Prof. Carlos Pacheco",
    repositorio: "https://github.com/AntonioYurquina/Lenguajes4_TP1",
    pagina: "/introduccion",
    botonNombre: "Introducción",
    descripcion:
      "Página HTML básica con input file para subir y validar imágenes usando la API File, subida a GitHub y publicada.",
  },
  {
    numero: 2,
    nombre: "TP2 - Componente React para Subida de Imagen",
    profesor: "Prof. Carlos Pacheco",
    repositorio: "https://github.com/AntonioYurquina/Lenguajes4_TP2",
    pagina: "/home",
    botonNombre: "Home",
    descripcion:
      "Sitio en React con componente para subir imágenes, validación de tipo imagen y consumo del componente en la página principal.",
  },
  {
    numero: 3,
    nombre: "TP3 - Formulario de Contacto",
    profesor: "Prof. Carlos Pacheco",
    repositorio: "https://github.com/AntonioYurquina/Lenguajes4_TP3",
    pagina: "/contacto",
    botonNombre: "Contacto",
    descripcion:
      "Se agregó menú de navegación, componente del TP2 y página 'Contacto' con formulario que envía datos a un correo, validaciones y ventana de confirmación.",
  },
  {
    numero: 4,
    nombre: "TP4 - Página de Servicios y Mapa",
    profesor: "Prof. Carlos Pacheco",
    repositorio: "https://github.com/AntonioYurquina/Lenguajes4_TP4",
    pagina: "/servicios",
    botonNombre: "Servicios",
    descripcion:
      "Se agregó página 'Servicios' mostrando datos de habitaciones desde un array local y se embebe un mapa en la página de contacto junto al formulario.",
  },
  {
    numero: 5,
    nombre: "TP5 - Página API\n---PROYECTO ACTUAL---",
    profesor: "Prof. Carlos Pacheco",
    repositorio: "https://github.com/AntonioYurquina/Lenguajes4_TP5",
    pagina: "/api",
    botonNombre: "API",
    descripcion:
      "Nueva página 'API' que consume datos de una API pública (mínimo 4 campos y una imagen) y los muestra dinámicamente en la página, subida a GitHub y publicada.",
  },
];


export default function LandingPages() {
  return <CardsTP trabajos={trabajosPracticosData} />;
}
