import React from "react";
import MenuMobile from "./menuMobile";
import MenuDesktop from './menuDesktop';
import '../css/header.css';

function Header({ message, title }) {
  return (
    <section id="header">
      <MenuDesktop idName="desktop-menu" />

      <header className="general-header">
        <div className="mobile-header">
          <h1>{message}</h1>
          <MenuMobile idName="mobile-menu" />
        </div>

        <div className="desktop-header">
          <h3>{message}</h3>
          <h1>{title}</h1>
          <hr />
        </div>
      </header>

      <div className="mobile-title-area">
        <h1>{title}</h1>
        <hr/>
      </div>
    </section>
  )
}

export default Header;


