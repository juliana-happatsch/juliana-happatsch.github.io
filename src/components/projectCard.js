import React from 'react';
import { Link } from "react-router-dom";
import '../css/projectCard.css';

function ProjectCard({img, title, type, info, klass}) {
  return (
    <div className={`project-card ${klass}`}>
      <img src={`${img}`} alt={`${title}`} />
      <section className="project-info">
        <h2>{title}</h2>
        <h3>{type}</h3>
        <p>{info}</p>
        <Link to="/projects" className="project-btn-link">
          <button type="button" className="project-btn">see more</button>
        </Link>
      </section>
    </div>
  )
}

export default ProjectCard;
