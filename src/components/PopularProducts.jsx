import React from 'react'
import '../styles/components/PopularProducts.css';
import ProductCard from './ProductCard';
import products from '../data/products.json';
import { useState, useEffect } from 'react';

const PopularProducts = () => {
  //반응형
  const [ isExtraLargeScreen, setIsExtraLargeScreen] = useState(window.innerWidth <= 1919);
  const [ isLargeScreen, setIsLargeScreen ] = useState(window.innerWidth <= 1250);
  const [ isTablet, setIsTablet ] = useState(window.innerWidth <= 1024);
  const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 767);

  const responsiveRender = () => {
    setIsExtraLargeScreen(window.innerWidth <= 1919);
    setIsLargeScreen(window.innerWidth <= 1250);
    setIsTablet(window.innerWidth <= 1024);
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(()=>{
    window.addEventListener('resize', responsiveRender);
    return() => {
      window.removeEventListener('resize', responsiveRender);
    };
  });

  return (
    <section className={`best-sellers ${isMobile ? 'best-sellers-mobile' : isTablet ? 'best-sellers-tablet' : isLargeScreen ? 'best-sellers-large' : isExtraLargeScreen ? 'best-sellers-desktop' : ''}`}>
      <div className='best-inner'>
        <div className="title-wrap">
          <h4>BEST SELLERS</h4> 
          <h6>사랑 받고있는 인기 상품을 만나보세요.</h6>
        </div>
        <div className={`product-wrap ${isMobile ? 'product-mobile' : isTablet ? 'product-tablet' : isLargeScreen ? 'product-large' : isExtraLargeScreen ? 'product-desktop' : ''}`}>
          {products.map((product, index) => (
            <ProductCard
            key={index}
            product={product}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularProducts