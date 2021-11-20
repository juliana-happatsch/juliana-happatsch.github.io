import React from 'react';
import '../css/skillsCard.css';

function SkillsCard({skills, klass}) {
  return (
    <div className='skills-card'>
      <ul className={`skills-list ${klass}`}>
        {skills.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </div>
  )
}

export default SkillsCard;
