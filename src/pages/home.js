import React from "react";
import Header from "../components/header";
import MenuDesktop from "../components/menuDesktop";
import InfoCard from "../components/infoCard";
import ProjectCard from "../components/projectCard";
import meGif from '../images/ezgif.com-gif-maker.gif';
import recipesApp from '../images/recipesapp.png';
import todoList from '../images/todolist.png';
import memeGenerator from '../images/memegenerator.png';
import pokedex from '../images/pokedex.png';
import '../css/home.css';

function Home() {
  document.title = "Home";
  
  const recipesAppInfo = (
    <p>
      STACKS: React, Redux, Context API e CSS.
      Um app de receitas (feito pensado para mobile) onde o usuário pode interagir e aplicar diferentes tipos de buscas e filtros. Projeto foi feito em grupo.
    </p>
  )

  return (
    <main className="home">
      <MenuDesktop idName="desktop-menu" />

    <section className="home-page">
      <Header
        message="WELCOME TO..."
        title="Juliana Happatsch's Portfolio"
      />

        <section className="home-info bottom-space">
          <h1>Player 01</h1>
          <div className="player">
            <img src={meGif} alt="eu" />
            <InfoCard />
          </div>

          <h1>Projects</h1>
          <ProjectCard 
            img={recipesApp}
            info={recipesAppInfo}
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
  )
}

export default Home;