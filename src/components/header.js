import React from "react";
import MenuMobile from "./menuMobile";
import '../css/header.css';

function Header({ message, title, extra, xpMsg }) {
  let extraMsg = null;

  if (extra) {
    function myFunction() {
      const popupCollection = document.getElementsByClassName("popuptext");
      const popupArray = [...popupCollection];
      popupArray.map((text) => text.classList.toggle("show"));
    }

    extraMsg = <h3 className="extra-xp" onClick={() => myFunction()}>+XP EXTRA
                  <span className="popuptext" id="myPopup">{ xpMsg }</span>
                </h3>;
  }

  return (
    <section id="header">
      <header className="general-header">
        <div className="mobile-header">
          <h1>{message}</h1>
          <MenuMobile idName="mobile-menu" />
        </div>

        <div className="desktop-header">
          <h2>{message}</h2>
          <h1>{title}</h1>
          { extraMsg }
          <hr/>
        </div>
      </header>

      <div className="mobile-title-area">
        <h1>{title}</h1>
        { extraMsg }
        <hr/>
      </div>
    </section>
  )
}

export default Header;


