import React from 'react';
import '../css/infoCard.css';

function InfoCard({info, klass}) {
  return (
    <div className={`info-card ${klass}`}>
      <p>{info}</p>
    </div>
  )
}

export default InfoCard;
