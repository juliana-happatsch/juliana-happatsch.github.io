import React from "react";
import Header from "../components/header";
import MenuDesktop from "../components/menuDesktop";
import profilePic from '../images/eu.jpeg';
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
        
        <div className="info">
          <div className='square'></div>
          <img src={profilePic} alt="eu" className="profile-pic" />

          <p className="first-p">
            A brazilian web developer student born and raised in Rio. In love with trying new things since 2001. <br/>

            I’m a curious and creative person that loves to learn new stuff everyday. All kind of stuff. <br/>

            I love art, music, imagining things and being able to create them. Tumblr themes were what made me realize this tech world really existed as I always tried to make my own using HTML and CSS. And, a few years later, I’m in love with it! <br/>

            I’m always trying to level up my habilities and to get out of my comfort zone. I’m shy but always open to talk and to help you out in the best way I can! <br/>

            I just got into tech and I feel like is the right place to be at.

            <br/><br/>
          </p>

          <p className='bottom-space'>
            Portuguese is my native language, but I can also speak English fluently and I’m currently learning Spanish, Korean and Italian (let’s travel the world, girl!).
            
            <br/><br/>

            As I said, I really like to learn different things and, because of this, I can play the guitar, the ukulele and the piano (I love to make music), I can also draw, paint, dance, bake a really good cake and my rice is wonderful. And I’m also learning how to skateboard (thanks to Rayssa Leal in the Olympics - let’s go, fadinha!!). This all I learned by myself on the Internet!
            
            <br/><br/>

            But what about tech?<br/>
            I got my first contact with any type of technology when I was 10 and I tried to make my own theme on Blogspot... Well, it didn’t go that well and it took me months to make one I actually liked. But Tumblr was the real one that made me realize that it was a thing and I loved using CSS. Thanks, David Karp! Now I’m currently studying at Trybe to become a Full-Stack Developer, but my Front-End skills are my forté. Check my hard skills on my skills page!
          </p>
        </div>
      </section>
    </main>
  )
}

export default About;