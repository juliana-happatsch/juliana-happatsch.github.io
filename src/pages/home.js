import React from "react";
import HeaderMobile from "../components/headerMobile";
import '../css/home.css';

function Home() {
  document.title = "Home";

  return (
    <main>
      <HeaderMobile message="WELCOME" title="Juliana Happatsch's Portfolio" />
    </main>
  )
}

export default Home;