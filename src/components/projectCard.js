import React from 'react';
import '../css/projectCard.css';

function ProjectCard({img, title, type, info, klass, link}) {
  return (
    <div className={`project-card ${klass}`}>
      <img src={`${img}`} alt={`${title}`} />
      <section className="project-info">
        <div>
          <h2>{title}</h2>
          <h3>{type}</h3>
          <p>{info}</p>
        </div>
        <a href={link} className="project-btn-link" rel='noreferrer' target='_blank'>
          <button type="button" className="project-btn">see more</button>
        </a>
      </section>
    </div>
  )
}

export default ProjectCard;
