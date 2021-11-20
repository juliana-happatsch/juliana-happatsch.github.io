import React from "react";
import Header from "../components/header";
import MenuDesktop from "../components/menuDesktop";
import ProjectCard from "../components/projectCard";
import recipesApp from '../images/recipesapp.png';
import todoList from '../images/todolist.png';
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
            title="Recipes App"
            type="Mobile First"
            link='https://juliana-happatsch.github.io/recipes-app/'
          />
          <ProjectCard 
            img={todoList}
            info="oi dnv"
            title="title"
            type="Desktop"
            link="https://juliana-happatsch.github.io/todo-list/"
          />
          <ProjectCard 
            img={pokedex}
            info="oi dnv"
            title="title"
            type="Desktop / Mobile"
            link="https://juliana-happatsch.github.io/my-pokedex/"
          />
          <ProjectCard 
            img={memeGenerator}
            info="oi dnv"
            title="title"
            type="Desktop"
            link='https://juliana-happatsch.github.io/meme-generator/'
          />
        </section>
      </section>
    </main>
  );
}

export default Projects;