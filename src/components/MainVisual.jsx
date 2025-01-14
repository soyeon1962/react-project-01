import React, { useEffect, useState } from 'react';
import '../styles/components/MainVisual.css';
//슬릭
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainVisual = () => {
  const settings = {
    infinite : true,
    speed : 500,
    arrows : false,
    dots : true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  //반응형
  const [ isTablet , setIsTablet ] = useState(window.innerWidth <= 1024);
  const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 767);

  const responsiveRender = () => {
    setIsTablet(window.innerWidth <= 1024);
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    window.addEventListener('resize', responsiveRender);
    return() => {
      window.removeEventListener('resize', responsiveRender);
    };
  });

  return (
    <section className={`main-visual  ${isMobile ? 'main-visual-mobile' : 'main-visual-desktop'}`}>
      <div className={`slide-wrap ${isMobile ? 'slide-moblie' : 'slide-desktop'}`}>
        <Slider {...settings}>
          <div>
            <img src="/assets/images/mainvisual_01.jpeg" alt="" />
          </div>
          <div>
            <img src="/assets/images/mainvisual_02.jpeg" alt="" />
          </div>
          <div>
            <img src="/assets/images/mainvisual_01.jpeg" alt="" />
          </div>
          <div>
            <img src="/assets/images/mainvisual_02.jpeg" alt="" />
          </div>
        </Slider>
      </div>
      <div className={`content-wrap ${isMobile ? 'content-mobile' : 'content-desktop'}`}>
        <h6 className={isTablet ? 'main-visual-title-tablet' : 'main-visual-title-desktop'}>GLOSSARY</h6>
        <h2>INGREDIENTS</h2>
        <img src="/assets/images/mainvisual_glossary.png" alt="" className={isTablet ? 'main-visual-image-tablet' : 'main-visual-image-desktop'}/>
        <span className={isTablet ? 'main-visual-text-tablet' : 'main-visual-text-desktop'}>The dynamic botanicals and other plant-based</span>
        <span className={isTablet ? 'main-visual-text-tablet' : 'main-visual-text-desktop'}>ingredients that make up our patent-pending formulas.</span>
        <p className={isTablet ? 'main-visual-btn-tablet' : 'main-visual-btn-desktop'}>Shop for solution</p>
      </div>
    </section>
  )
}

export default MainVisual