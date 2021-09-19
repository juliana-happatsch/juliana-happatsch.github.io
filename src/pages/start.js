import React from "react";
import '../css/start.css';

function Start() {
  return (
    <main id="start-body">
      <section className="glowing">
        <span className="sparkle1" style={ { '--i': 3 } }></span>
        <span className="sparkle2" style={ { '--i': 5 } }></span>
        <span className="sparkle3" style={ { '--i': 8 } }></span>
        <span className="sparkle4" style={ { '--i': .7 } }></span>
        <span className="sparkle5" style={ { '--i': 9 } }></span>
      </section>
    </main>
  )
}

export default Start;