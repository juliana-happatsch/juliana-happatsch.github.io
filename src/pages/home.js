import React from "react";
import Header from "../components/header";
import '../css/home.css';

function Home() {
  document.title = "Home";

  return (
    <main>
      <Header
        message="WELCOME TO..."
        title="Juliana Happatsch's Portfolio"
      />
    </main>
  )
}

export default Home;