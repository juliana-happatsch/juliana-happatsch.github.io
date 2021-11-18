import React from "react";
import Header from "../components/header";
import MenuDesktop from "../components/menuDesktop";
import '../css/contact.css';

function Contact() {
  document.title = "Contact";

  return (
    <main className="contact">
      <MenuDesktop idName="desktop-menu" />

      <section className="contact-page">
        <Header message="FINAL LEVEL" title="Contact me!" />
      </section>
    </main>
  )
}

export default Contact;