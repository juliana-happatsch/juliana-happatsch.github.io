import React from "react";
import { Link } from "react-router-dom";
import ticket from '../images/ticket.png';
import '../css/start.css';

function Start() {
  document.title = "Juliana's Portfolio";
  
  return (
    <main id="start-body">
      <section className="glowing">
        <span className="sparkle1"></span>
        <span className="sparkle2"></span>
        <span className="sparkle3"></span>
        <span className="sparkle4"></span>
        <span className="sparkle5"></span>

        
        <img src={ticket} alt="ticket" />
      </section>
      
      <Link to="/home">
        <button type="button" className="btn start-btn">Start</button>
      </Link>
    </main>
  )
}

export default Start;