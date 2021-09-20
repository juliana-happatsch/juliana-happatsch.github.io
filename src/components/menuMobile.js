import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/menu.css';

function MenuMobile() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    const list = document.getElementById('myLinks');

    if (hamburgerOpen) {
      list.style.display = "inline";
    } else {
      list.style.display = "none";
    }
  }

  const myFunction = () => {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <nav>
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


