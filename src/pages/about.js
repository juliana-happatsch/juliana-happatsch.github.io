import React from "react";
import HeaderMobile from "../components/headerMobile";

function About() {
  document.title = "About";

  return (
    <main>
      <HeaderMobile message="LEVEL 01" title="About me" />
    </main>
  )
}

export default About;