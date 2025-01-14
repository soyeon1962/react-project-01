import React from 'react';
import '../styles/pages/HomePage.css';
import MainVisual from '../components/MainVisual';
import IntroSection from '../components/IntroSection';
import { useState, useEffect } from 'react';
import PopularProducts from '../components/PopularProducts';
import Accordion from '../components/Accordion';

const HomePage = () => {
  //반응형
  const [ isLargeScreen, setIsLargeScreen ] = useState(window.innerWidth <= 1250);
  const [ isTablet, setIsTablet ] = useState(window.innerWidth <= 1024);
  const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 767);

  const responsiveRender = () => {
    setIsLargeScreen(window.innerWidth <= 1250);
    setIsTablet(window.innerWidth <= 1024);
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    window.addEventListener('resize', responsiveRender);
    return() => {
      window.removeEventListener('resize', responsiveRender);
    }
  })

  return (
    <div>
      <MainVisual/>
      <IntroSection/>
      <div className={`gap-image ${isMobile ? 'gap-image-mobile' : isTablet ? 'gap-image-tablet' : isLargeScreen ? 'gap-image-large' : 'gap-image-desktop'}`}>
        <img src="/assets/images/layout-gap.jpeg" alt="" />
      </div>
      <PopularProducts/>
      <Accordion/>
    </div>
  )
}

export default HomePage