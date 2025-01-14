import React from 'react';
import '../styles/components/IntroSection.css';
import { useState, useEffect } from 'react';
//슬릭
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IntroSection = () => {
  //반응형
  const [ isTablet, setIsTablet ] = useState(window.innerWidth <= 1024);
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

  const settings = {
    infinite : true,
    speed : 500,
    arrows : false,
    dots : true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className={`intro-section ${isMobile ? 'intro-mobile' : 'intro-desktop'}`}>
      <div className='title-wrap'>
        <h4>OUR METHOD</h4>
        <h6>OUR DISTINCTIVE PHOTOGRAPHY</h6>
      </div>
      {isMobile ? (
        <Slider {...settings} className='product-wrap product-mobile'>
          <div className={`product-box ${isTablet ? 'product-tablet' : 'product-desktop'}`}>
            <div className="img-wrap">
              <img src="/assets/images/intro-image_01.jpeg" alt="" />
              <span>OUR APPROACH</span>
            </div>
            <div className="text-wrap">
              <p>Capturing life's scenes, we blend</p>
              <p>light and emotion for unique photos</p>
              <p>that tell stories.</p>
            </div>
          </div>
          <div className={`product-box ${isTablet ? 'product-tablet' : 'product-desktop'}`}>
            <div className="img-wrap">
              <img src="/assets/images/intro-image_02.jpeg" alt="" />
              <span>APPROACH AND EXPERTISE</span>
            </div>
            <div className="text-wrap">
              <p>Scientific Precision, Artistic Passion</p>
              <p>We use technology and creativity</p>
              <p>to create images that reflect your vision.</p>
            </div>
          </div>
          <div className={`product-box ${isTablet ? 'product-tablet' : 'product-desktop'}`}>
            <div className="img-wrap">
              <img src="/assets/images/intro-image_03.jpeg" alt="" />
              <span>UNIQUE METHOD</span>
            </div>
            <div className="text-wrap">
              <p>Distinctive Photography</p>
              <p>Our creative storytelling and technique</p>
              <p>capture moments with light and shadow.</p>
            </div>
          </div>
        </Slider>
      ) : (
        <div className='product-wrap'>
          <div className={`product-box ${isTablet ? 'product-tablet' : 'product-desktop'}`}>
            <div className="img-wrap">
              <img src="/assets/images/intro-image_01.jpeg" alt="" />
              <span>OUR APPROACH</span>
            </div>
            <div className="text-wrap">
              <p>Capturing life's scenes, we blend</p>
              <p>light and emotion for unique photos</p>
              <p>that tell stories.</p>
            </div>
          </div>
          <div className={`product-box ${isTablet ? 'product-tablet' : 'product-desktop'}`}>
            <div className="img-wrap">
              <img src="/assets/images/intro-image_02.jpeg" alt="" />
              <span>APPROACH AND EXPERTISE</span>
            </div>
            <div className="text-wrap">
              <p>Scientific Precision, Artistic Passion</p>
              <p>We use technology and creativity</p>
              <p>to create images that reflect your vision.</p>
            </div>
          </div>
          <div className={`product-box ${isTablet ? 'product-tablet' : 'product-desktop'}`}>
            <div className="img-wrap">
              <img src="/assets/images/intro-image_03.jpeg" alt="" />
              <span>UNIQUE METHOD</span>
            </div>
            <div className="text-wrap">
              <p>Distinctive Photography</p>
              <p>Our creative storytelling and technique</p>
              <p>capture moments with light and shadow.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default IntroSection