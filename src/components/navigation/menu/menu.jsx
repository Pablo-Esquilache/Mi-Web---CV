import React from "react"
import { NavLink } from "react-router-dom";
import Logo from "./Logo-CV.jpg";
import "./menu.css"

const Menu = () => {
  return (
    <nav>
      <img className="img_menu" src={Logo} alt="" />   
      <ul>
        <li>
          <NavLink exact="treu" to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/estudios">Estudios</NavLink>
        </li>
        <li>
          <NavLink to="/experiencia-laboral">Experiencia</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

