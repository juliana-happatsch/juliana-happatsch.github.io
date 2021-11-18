import React from "react";
import Header from "../components/header";
import MenuDesktop from "../components/menuDesktop";
import '../css/about.css';

function About() {
  document.title = "About";

  return (
    <main className="about">
      <MenuDesktop idName="desktop-menu" />

      <section className="about-page">
        <Header
          message="LEVEL 01"
          title="About me"
          extra={true}
          xpMsg="bonus fact: I only found out I had ADHD at 20 years old!"
        />
      </section>
    </main>
  )
}

export default About;