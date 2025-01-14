import React, { use } from 'react'
import '../styles/components/Accordion.css';
import accordion from '../data/accordion.json';
import AccordionCard from './AccordionCard';
import { useState, useEffect } from 'react';

const Accordion = () => {
  //아코디언
  const [ activeAccordion, setActiveAccordion ] = useState(null);

  const handleAccordionClick  = (accordion) => {
    setActiveAccordion(accordions => (accordions === accordion ? null : accordion));
  };

  //반응형
  const [ isTablet, setIsTablet ] = useState(window.innerWidth <= 1024);
  const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 850);

  const responsiveRender = () => {
    setIsTablet(window.innerWidth <= 1024);
    setIsMobile(window.innerWidth <= 850);
  };

  useEffect(() => {
    window.addEventListener('resize', responsiveRender);
    return() => {
      window.removeEventListener('resize', responsiveRender);
    };
  });

  return (
    <section className={isMobile ? 'accordion-mobile' : isTablet ? 'accordion-tablet' : 'accordion-desktop'}>
      <div className='accordion-inner'>
        <h2>OUR SERVICE</h2>
        {isTablet ? (
          <span>여러분의 요구에 맞게 맞춤형으로 제공됩니다.<br/> 우리와 함께 여정을 나누어 주세요. <br/>덧없는 순간을 영원한 추억으로 만들어드립니다.</span>
        ) : (
          <span>자연스러운 순간부터 화려한 축제까지, 우리의 사진 서비스는 여러분의 요구에 맞게 맞춤형으로 제공됩니다.<br/> 우리와 함께 여정을 나누어 주세요. 덧없는 순간을 영원한 추억으로 만들어드립니다.</span>
        )}
        {accordion.map((accordion, index) => (
          <AccordionCard
          key={index}
          accordion={accordion}
          activeAccordion={activeAccordion}
          onAccordionClick={handleAccordionClick}
          isTablet={isTablet}
          />
        ))}
      </div>
    </section>
  );
};

export default Accordion;
