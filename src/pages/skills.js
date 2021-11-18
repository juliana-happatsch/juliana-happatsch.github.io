import React from "react";
import Header from "../components/header";
import MenuDesktop from "../components/menuDesktop";
import '../css/skills.css';

function Skills() {
  document.title = "Skills";
  
  return (
    <main className="skills">
      <MenuDesktop idName="desktop-menu" />

      <section className="skills-page">
        <Header message="LEVEL 02" title="My skills" />
      </section>
    </main>
  )
}

export default Skills;