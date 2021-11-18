import React from "react";
import Header from "../components/header";
import MenuDesktop from "../components/menuDesktop";
import '../css/projects.css';

function Projects() {
  document.title = "Projects";

  return (
    <main className="projects">
      <MenuDesktop idName="desktop-menu" />

      <section className="projects-page">
        <Header
          message="LEVEL 03"
          title="My projects"
          extra={true}
          xpMsg="bonus fact: my first tumblr theme was a cat theme"
        />
      </section>
    </main>
  );
}

export default Projects;