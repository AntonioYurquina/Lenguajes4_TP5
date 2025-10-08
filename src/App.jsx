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

      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/introduccion" element={<Introduccion />} />
        <Route path="/home" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </Router>
  );
}

export default App;
