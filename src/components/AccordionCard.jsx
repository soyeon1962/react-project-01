import React from 'react';
import '../styles/components/AccordionCard.css';
import { PiPlusLight } from "react-icons/pi";
import { useState, useEffect } from 'react';

const AccordionCard = ({ accordion, activeAccordion, onAccordionClick }) => {
  return (
    <div>
      <div className='accordion-item'>
        <div className="accordion-title" onClick={() => onAccordionClick(accordion.num)}>
          <p>{accordion.num}</p>
          <p>{accordion.title}</p>
          <PiPlusLight />
        </div>
        <div className={`accordion-text ${activeAccordion === accordion.num ? 'active' : ''}`}>
          {accordion.text}
        </div>
      </div>
    </div>
  )
}

export default AccordionCard