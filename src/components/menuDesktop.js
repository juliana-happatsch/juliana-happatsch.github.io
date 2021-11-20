import React from "react";
import { Link } from "react-router-dom";
import '../css/menu.css';

function MenuDesktop({idName}) {
  return (
    <nav id={idName} className="desktop-menu">
      <Link to="/home" className="desktop-menu-link">
        <button type="button" className="round-btn red-btn"></button>
        home
      </Link>

      <Link to="/about" className="desktop-menu-link">
        <button type="button" className="round-btn red-btn"></button>
        about
      </Link>

      <Link to="/skills" className="desktop-menu-link">
        <button type="button" className="round-btn red-btn"></button>
        skills
      </Link>

      <Link to="/projects" className="desktop-menu-link">
        <button type="button" className="round-btn red-btn"></button>
        projects
      </Link>

      <Link to="/contact" className="desktop-menu-link">
        <button type="button" className="round-btn red-btn"></button>
        contact
      </Link>
    </nav>
  )
}

export default MenuDesktop;


