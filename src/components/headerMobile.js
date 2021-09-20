import React from "react";
import MenuMobile from "./menuMobile";
import '../css/header.css';

function HeaderMobile({ message, title }) {
  return (
    <section>
      <header className="mobile-header">
        <h1>{message}</h1>
        <MenuMobile />
      </header>

      <div className="mobile-title-area">
        <h1 className="mobile-title">{title}</h1>
        <hr/>
      </div>
    </section>
  )
}

export default HeaderMobile;


