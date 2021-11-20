import { React, useEffect, useState } from 'react';
import '../css/infoCard.css';

function InfoCard() {
  const [techs, setTechs] = useState('HTML, CSS, JS, React +');
  const [birthday, setBirthday] = useState('March 1st, 2001');
  const [name, setName] = useState('Juliana Happatsch');
  

  useEffect(() => {
    const handleWindowSize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 670) setTechs('HTML, CSS, JavaScript, React, Redux, Context API +');
      if (windowWidth <= 500 || windowWidth <= 1024 || windowWidth <= 1160) setTechs('HTML, CSS, JavaScript, React +');
      if (windowWidth <= 380) setTechs('HTML, CSS, JS +');
      if (windowWidth <= 360) {
        setTechs('HTML, CSS +');
        setBirthday('01/03/2001');
        setName('Juliana');
      }
    };

    window.addEventListener('resize', handleWindowSize);
  }, [techs]);

  return (
    <div className='info-card'>
      <div className='about-category'>
        <p>NAME:</p>
        <p>BIRTHDAY:</p>
        <p>TECHS:</p>
        <p>STRENGTH:</p>
        <p>WEAKNESS:</p>
      </div>
      <div className='vl'></div>
      <div className='about-infos'>
        <p>{name}</p>
        <p>{birthday}</p>
        <p>{techs}</p>
        <p>Skateboard</p>
        <p>Lactose</p>
      </div>
    </div>
  )
}

export default InfoCard;
