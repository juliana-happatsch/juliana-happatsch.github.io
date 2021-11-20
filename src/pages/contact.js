import React from "react";
import Header from "../components/header";
import MenuDesktop from "../components/menuDesktop";
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import space from '../images/planets.gif';
import '../css/contact.css';

function Contact() {
  document.title = "Contact";

  return (
    <main className="contact">
      <MenuDesktop idName="desktop-menu" />

      <section className="contact-page bottom-space">
        <Header message="FINAL LEVEL" title="Contact me!" />

        <div className='contact-info'>
          <div className='socials'>
            <a href="https://github.com/juliana-happatsch" rel='noreferrer' target='_blank' className="contact-link">
              <img src={github} alt="github" />
              <span>/juliana-happatsch</span>
            </a>
            <a href="https://www.linkedin.com/in/julianahappatsch/" rel='noreferrer' target='_blank' className="contact-link">
              <img src={linkedin} alt="linkedin" />
              <span>/julianahappatsch</span>
            </a>
          </div>

          <h1 className='form-title'>Send me a message!</h1>
          <div className='contact-form'>
            <form action="https://formsubmit.co/jhappatsch@gmail.com" method="POST">
                <input type="text" name="name" placeholder="Name*" required className='formie' />
                <input type="email" name="email" placeholder="Email*" required className='formie' />
                <input type="text" name="_subject" placeholder="Subject" className='formie' />
                <textarea placeholder="Content" class="form-control" name="message" rows="10" required className='formie'></textarea>

                <input type="hidden" name="_next" value="https://juliana-happatsch.github.io/#/contact" />
                <input type="hidden" name="_captcha" value="false" />
                <button type="submit" className='form-btn'>Send</button>
            </form>

            <div className='message'>
              <p>
                MISSION COMPLETE...<br /><br/>
                THANKS FOR PASSING BY! I HOPE YOU HAVE A WONDERFUL DAY!
              </p>
              <img src={space} alt='space' className='planets' />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact;