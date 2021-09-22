import React from "react";
import { Link } from "react-router-dom";
import '../css/menu.css';

function MenuMobile({idName}) {
  return (
    <nav id={idName}>
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        
        <ul id="menu">
          <Link to="/home"><li>home</li></Link>
          <Link to="/about"><li>about</li></Link>
          <Link to="/skills"><li>skills</li></Link>
          <Link to="/projects"><li>projects</li></Link>
          <Link to="/contact"><li>contact</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default MenuMobile;


