import { React, useEffect, useState } from 'react';
import '../css/infoCard.css';

function InfoCard() {
  const windowFirstSize = window.innerWidth;
  let firstTechs = '';
  let firstBirthday = '';
  let firstName = '';
      
  if (windowFirstSize >= 421 && windowFirstSize > 420 && windowFirstSize < 670) {
    firstTechs = 'HTML, CSS, JS, React +';
    firstBirthday = 'March 1st, 2001';
    firstName = 'Juliana Happatsch';
  } else if (windowFirstSize <= 420 && windowFirstSize > 360) {
    firstTechs = 'HTML, CSS, JS +';
    firstBirthday = 'March 1st, 2001';
    firstName = 'Juliana Happatsch';
  } else if (windowFirstSize <= 360) {
    firstTechs = 'HTML, CSS +';
    firstBirthday = '01/03/2001';
    firstName = 'Juliana';
  } else if (windowFirstSize >= 670) {
    firstTechs = 'HTML, CSS, JavaScript, React, Redux, Context API +';
    firstBirthday = 'March 1st, 2001';
    firstName = 'Juliana Happatsch';
  }

  const [techs, setTechs] = useState(firstTechs);
  const [birthday, setBirthday] = useState(firstBirthday);
  const [name, setName] = useState(firstName);

  useEffect(() => {
    const handleWindowSize = () => {
      const windowWidth = window.innerWidth;
      
      if (windowWidth <= 421) setTechs('HTML, CSS, JS, React +');
      if (windowWidth <= 420) setTechs('HTML, CSS, JS +');
      if (windowWidth <= 360) {
        setTechs('HTML, CSS +');
        setBirthday('01/03/2001');
        setName('Juliana');
      }
      if (windowWidth >= 670) setTechs('HTML, CSS, JavaScript, React, Redux, Context API +');
    };

    window.addEventListener('load', handleWindowSize);
    window.addEventListener('resize', handleWindowSize);
  }, [techs, windowFirstSize]);

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
