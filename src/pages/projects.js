import React from "react";
import Header from "../components/header";
import MenuDesktop from "../components/menuDesktop";
import ProjectCard from "../components/projectCard";
import recipesApp from '../images/recipesapp.png';
import todoList from '../images/todolist.png';
import memeGenerator from '../images/memegenerator.png';
import pokedex from '../images/pokedex.png';
import marioColors from '../images/mario-mockup.png';
import snakeGame from '../images/snake-game-mockup.png';
import '../css/projects.css';

function Projects() {
  document.title = "Projects";

  const recipesAppInfo = (
    <p>
      React, Redux, Context API and CSS.<br/><br/>
      A recipes app (made for mobile) where the user can interact and apply different types of searches and filters. This project was made in group.
      In the app, it's possible to find food and drink recipes. When the user opens a recipe, they can start it and its progress will be saved, in addition the user can also favorite the recipe. There's a profile page which has the done and favorited recipes. It's possible to search recipes using the search bar and applying the filters or through categories.
    </p>
  );

  const todoListInfo = (
    <p>
      HTML, CSS and JavaScript.<br/><br/>
      App made to write your to-do list. The list can be saved in the localStorage or deleted. It's possible to mark a task as done and delete it, aside from this, it's also possible to change the order of the tasks and delete just one of it, even if it is not done.
    </p>
  );

  const pokedexInfo = (
    <p>
      React and CSS.<br/><br/>
      A small responsive app that shows a small list of pokemons. Informations of each pokemon is shown, as, for example, its name, weight and type, in addition it also shows a small gif of the pokemon. It was my first project using React e flexbox and its focus was to practice these things.
    </p>
  );

  const memeGeneratorInfo = (
    <p>
      HTML, CSS and JavaScript.<br/><br/>
      In this app the user can create their own meme! There are 4 base images that can be chosen, but it's also possible to choose an image from the user's computer. It's possible to write on the meme and choose a frame just to decorate it. It's one of my favorite projects just because of the meme theme!
    </p>
  );

  const marioInfo = (
    <p>
      HTML, CSS and JavaScript.<br/><br/>
      My first project using speech recognition! It's a mini game where the users can practice their English pronunciation and vocubulary with colors! I made it following Felipe Aguiar's class in the Digital Innovation One website.
    </p>
  );

  const snakeInfo = (
    <p>
      HTML, CSS and JavaScript<br/><br/>
      It was inspired by the famous snake game that we all played once in our lives. I made it following Gabriela Pinheiro's class in the Digital Innovation One website.
    </p>
  );

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
            info={recipesAppInfo}
            title="Recipes App"
            type="Mobile First"
            link='https://juliana-happatsch.github.io/recipes-app/'
          />
          <ProjectCard 
            img={marioColors}
            info={marioInfo}
            title="Mario Colors Challenge"
            type="Desktop / Mobile"
            link="https://juliana-happatsch.github.io/mario-colors/"
          />
          <ProjectCard 
            img={todoList}
            info={todoListInfo}
            title="Todo list"
            type="Desktop"
            link="https://juliana-happatsch.github.io/todo-list/"
          />
          <ProjectCard 
            img={snakeGame}
            info={snakeInfo}
            title="Snake Game"
            type="Desktop"
            link='https://juliana-happatsch.github.io/snake-game/'
          />
          <ProjectCard 
            img={pokedex}
            info={pokedexInfo}
            title="Pokedex"
            type="Desktop / Mobile"
            link="https://juliana-happatsch.github.io/my-pokedex/"
          />
          <ProjectCard 
            img={memeGenerator}
            info={memeGeneratorInfo}
            title="Meme Generator"
            type="Desktop"
            link='https://juliana-happatsch.github.io/meme-generator/'
          />
        </section>
      </section>
    </main>
  );
}

export default Projects;