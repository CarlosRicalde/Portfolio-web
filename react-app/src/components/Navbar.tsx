import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="navbar-custom">
      {/* HAMBURGUESA */}
      <div className="hamburguesa" onClick={() => setMenuAbierto(!menuAbierto)}>
        ☰
      </div>

      {/* LINKS */}
      <ul className={`nav-links ${menuAbierto ? "activo" : ""}`}>
        <li className="item">
          <a href="#sobre-mi" onClick={() => setMenuAbierto(false)}>
            Sobre mí
          </a>
        </li>
        <li className="item">
          <a href="#tecnologias" onClick={() => setMenuAbierto(false)}>
            Tecnologías
          </a>
        </li>
        <li className="item">
          <a href="#proyectos" onClick={() => setMenuAbierto(false)}>
            Proyectos
          </a>
        </li>
        <li className="item">
          <a href="#contacto" onClick={() => setMenuAbierto(false)}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
