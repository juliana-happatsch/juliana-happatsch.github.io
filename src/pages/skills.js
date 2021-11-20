import React, { useState } from "react";
import Header from "../components/header";
import MenuDesktop from "../components/menuDesktop";
import SkillsCard from "../components/skillsCard";
import '../css/skills.css';

function Skills() {
  const [ssClass, setSsClass] = useState('');
  const [hsClass, setHsClass] = useState('active');
  const [skills, setSkills] = useState(['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'Context API', 'MySQL', 'MongoDB', 'Linux', 'Git', 'Figma']);
  const [skillKlass, setSkillKlass] = useState('hsList');
  document.title = "Skills";

  const changeClass = ({ target }) => {
    const classList = [...target.classList];
    
    if (classList.includes('hs-btn')) {
      setHsClass('active');
      setSsClass('');
      setSkillKlass('hsList');
      setSkills(['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'Context API', 'MySQL', 'MongoDB', 'Linux', 'Git', 'Figma']);
    } else {
      setSsClass('active');
      setHsClass('');
      setSkillKlass('ssList');
      setSkills(['Creativity', 'Team work', 'Critical thinking', 'Communication', 'Resilience', 'Empathy']);
    }
  }
  
  return (
    <main className="skills">
      <MenuDesktop idName="desktop-menu" />

      <section className="skills-page bottom-space">
        <Header message="LEVEL 02" title="My skills" />

        <div className='skills-btns'>
          <div className='hs'>
            <button type='button' className='round-btn hs-btn' onClick={changeClass}></button>
            <span className={hsClass}>HARD SKILLS</span>
          </div>
        
          <div className='ss'>
            <button type='button' className='round-btn ss-btn' onClick={changeClass}></button>
            <span className={ssClass}>SOFT SKILLS</span>
          </div>
        </div> 

        <SkillsCard skills={skills} klass={skillKlass} />
      </section>
    </main>
  )
}

export default Skills;