# Sitio multipágina en React

SPA con React y React Router que reúne las piezas de un sitio web completo: navegación entre
secciones, consumo de una API pública, formulario de contacto con envío de correo y un listado
de servicios. Es mi trabajo integrador de la cursada de Lenguajes IV (UCASAL).

**[Ver demo en vivo](https://antonioyurquina.github.io/Lenguajes4_TP5/)**

## Qué muestra

| Sección | Qué hace |
|---|---|
| Introducción | Ficha del trabajo: cátedra, consigna y objetivos |
| Home | Visor de archivos: carga imágenes, videos y PDFs desde el equipo y permite seleccionarlos |
| Servicios | Listado de habitaciones en tarjetas |
| Contacto | Formulario que envía el mensaje por correo (EmailJS) |
| API | Pronóstico del clima por ciudad desde [Open-Meteo](https://open-meteo.com), con búsqueda y estados de carga y error |

## Stack

`React 19` `React Router 7` `Vite` `Bootstrap 5` `EmailJS`

## Cómo correrlo

```bash
npm install
npm run dev
```

Para generar el build: `npm run build`.
