import React from 'react';
import '../styles/components/Footer.css';
import { Link } from 'react-router-dom';
import { PiInstagramLogoLight, PiPlusBold } from "react-icons/pi";
import { useState, useEffect } from 'react';

const Footer = () => {
  //active
  const [ activeFooter, setActiveFooer ] = useState(null);

  const handleClick = (footer) => {
    setActiveFooer((text) => (text === footer ? null : footer))
  };

  //반응형
  const [ isTablet, setIsTablet ] = useState(window.innerWidth <= 1024);

  const responsiveRender = () => {
    setIsTablet(window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', responsiveRender);
    return() => {
      window.removeEventListener('resize', responsiveRender);
    };
  });

  return (
    <div>
      <div className="footer-inner">
        <div className="animation-wrap">
          <div className='animation'>
            <span>Graceful Women's Fashion, Embodies the Virtue of Elegance. Experience Timeless Beauty with Refined Style</span>
            <span>Graceful Women's Fashion, Embodies the Virtue of Elegance. Experience Timeless Beauty with Refined Style</span>
            <span>Graceful Women's Fashion, Embodies the Virtue of Elegance. Experience Timeless Beauty with Refined Style</span>
            <span>Graceful Women's Fashion, Embodies the Virtue of Elegance. Experience Timeless Beauty with Refined Style</span>
            <span>Graceful Women's Fashion, Embodies the Virtue of Elegance. Experience Timeless Beauty with Refined Style</span>
          </div>
        </div>
        <div className={`footer-wrap ${isTablet ? 'footer-tablet' : 'footer-desktop'}`}>
          <div className={`main-area ${isTablet ? 'main-tablet' : 'main-desktop'}`}>
            <img src="/assets/images/footer-logo.png" alt="" />
            <PiInstagramLogoLight />
            <span>&copy;MATIE STUDIO</span>
          </div>
          <div className={`customer-area ${isTablet ? 'customer-tablet' : 'customer-desktop'}`}>
            <span>C/S CENTER</span>
            <span>1599-3360 | MON_FRI 10:00 - 17:00</span>
            <span>BREAK 12:00 - 13:00</span>
            <span>SAT / SUN / HOLIDAY OFF</span>
            <br/>
            <span>BANKING</span>
            <span>제일은행 505-20-558526</span>
            <span>에금주 김덕현</span>
          </div>
          <div className={`community-area ${isTablet ? 'community-tablet' : 'community-desktop'}`}>
            <Link to="/faq">FAQ</Link>
            <Link to="/notice">NOTICE</Link>
            <Link to="/event">EVENT</Link>
            <Link to="/qna">Q&A</Link>
            <Link to="/review">REVIEW</Link>
            <Link to="/exchange">EXCHANGE</Link>
          </div>
          <div className={`utility-area ${isTablet ? 'utility-tablet' : 'utility-desktop'}`}>
            <Link to="/회사소개">회사소개</Link>
            <Link to="/이용안내">이용안내</Link>
            <Link to="/이용약관">이용약관</Link>
            <Link to="/개인정보처리방침">개인정보처리방침</Link>
          </div>
          <div className={`btn-area ${isTablet ? 'btn-footer-tablet' : 'btn-footer-desktop'}`} onClick={() => handleClick('footer')}>
            <button>company information<PiPlusBold className={activeFooter === 'footer' ? 'active' : ''}/></button>
          </div>
          <div className={`info-area ${activeFooter === 'footer' ? 'active' : ''} ${isTablet ? 'info-tablet' : 'info-desktop'}`}>
            <span>상호명 : MATIE STUDIO, 대표자 : 김덕현, 사업자등록번호 : 602-07-87684, 통신판매업 신고 : 2019-부산해운대-0999호</span>
            <span>주소 : 부산해운대대교사옥 9층 47호 9번 부산광역시 해운대구 세실로 79, 개인정보보호책임자 : 김덕현, onedesign@doum.net</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer