import React from "react";
import Header from "../components/header";
import MenuDesktop from "../components/menuDesktop";
import InfoCard from "../components/infoCard";
import ProjectCard from "../components/projectCard";
import meGif from '../images/ezgif.com-gif-maker.gif';
import projectBase from '../images/teste.jpg';
import '../css/home.css';

function Home() {
  document.title = "Home";

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
  )
}

export default Home;