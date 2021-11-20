import React from "react";
import Header from "../components/header";
import MenuDesktop from "../components/menuDesktop";
import ProjectCard from "../components/projectCard";
import recipesApp from '../images/91376.png';
import todoList from '../images/OSXDCD1.png';
import memeGenerator from '../images/memegenerator.png';
import pokedex from '../images/pokedex.png';
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
            img={recipesApp}
            info="oi dnv"
            title="title"
            type="type"
          />
          <ProjectCard 
            img={todoList}
            info="oi dnv"
            title="title"
            type="type"
          />
          <ProjectCard 
            img={pokedex}
            info="oi dnv"
            title="title"
            type="type"
          />
          <ProjectCard 
            img={memeGenerator}
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