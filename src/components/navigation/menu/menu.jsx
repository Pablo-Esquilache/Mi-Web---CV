import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "./LOGO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./menu.css";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = () => {
    setShowMenu(false); // Oculta el menú al hacer clic en un elemento del menú
  };

  return (
    <nav>
      <div className="nav_logo_container">
        <img className="img_menu" src={LOGO} alt="" />
        <FontAwesomeIcon
          icon={faBars}
          className="menu_icon"
          onClick={handleMenuClick}
        />
      </div>
      <div className={`nav_ul_container ${showMenu ? "show" : ""}`}>
        <ul>
          <li>
            <NavLink exact to="/" onClick={handleMenuItemClick}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/estudios" onClick={handleMenuItemClick}>
              Estudios
            </NavLink>
          </li>
          <li>
            <NavLink to="/experiencia-laboral" onClick={handleMenuItemClick}>
              Experiencia
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" onClick={handleMenuItemClick}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
