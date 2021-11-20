import React from "react";
import Header from "../components/header";
import MenuDesktop from "../components/menuDesktop";
import ProjectCard from "../components/projectCard";
import projectBase from '../images/teste.jpg';
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

        <section className="projects-info bottom-space">
        <ProjectCard 
            img={projectBase}
            info="oi dnv"
            title="title"
            type="type"
          />
          <ProjectCard 
            img={projectBase}
            info="oi dnv"
            title="title"
            type="type"
          />
          <ProjectCard 
            img={projectBase}
            info="oi dnv"
            title="title"
            type="type"
          />
          <ProjectCard 
            img={projectBase}
            info="oi dnv"
            title="title"
            type="type"
          />
        </section>
      </section>
    </main>
  );
}

export default Projects;