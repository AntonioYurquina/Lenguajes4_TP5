import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPages from "./pages/LandingPages.jsx";
import Home from "./pages/Home.jsx";
import Contacto from "./pages/Contacto.jsx";
import Servicios from "./pages/Servicios.jsx";
import Api from "./pages/Api.jsx";
import Introduccion from "./pages/Introduccion.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Lenguajes IV - Comision: Carlos Pacheco
            </Link>

            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/introduccion">Introducción</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/servicios">Servicios</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">Contacto</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/api">Api</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<LandingPages />} />
            <Route path="/introduccion" element={<Introduccion />} />
            <Route path="/home" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/api" element={<Api />} />
          </Routes>
        </main>

        <footer className="border-top mt-5 py-3 text-center small text-body-secondary">
          Desarrollado por{" "}
          <a className="text-reset" href="https://arkode.com.ar" target="_blank" rel="noopener">
            Arkode
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
