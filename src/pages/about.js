import React from "react";
import Header from "../components/header";

function About() {
  document.title = "About";

  return (
    <main>
      <Header message="LEVEL 01" title="About me" />
    </main>
  )
}

export default About;