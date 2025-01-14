import React from 'react';
import '../styles/pages/FAQPage.css';
import { useState, useEffect } from 'react';
import faqs from '../data/faqs.json';
import Faq from '../components/FAQ';
import SubMenu from '../components/SubMenu';

const FAQPage = () => {
  //아코디언
  const [ activeFaq, setActiveFaq ] = useState(null);

  const handleFaqClick = (faq) => {
    setActiveFaq(faqs => (faqs === faq ? null : faq));
  };
  
  //그룹나누기
  const subjectFaqs = faqs.reduce((acc, faq) => {
    if(!acc[faq.subject]){
      acc[faq.subject] = [];
    }
    acc[faq.subject].push(faq);
    return acc;
  }, {});

  //반응형
  const [ isTablet, setIsTablet ] = useState(window.innerWidth <= 1024);
  const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 890);

  const responsiveRender = () => {
    setIsTablet(window.innerWidth <= 1024);
    setIsMobile(window.innerWidth <= 890);
  };

  useEffect(() => {
    window.addEventListener('resize', responsiveRender);
    return() => {
      window.removeEventListener('resize', responsiveRender);
    };
  });

  return (
    <section className={`faq sub-page ${isTablet ? 'responsive' : ''}`}>
      <div className='faq-inner sub-page-inner'>
        <div className="sub-page-menu-wrap">
          <SubMenu />
        </div>
        <div className={`faq-wrap ${isMobile ? 'faq-mobile' : ''}`}>
          <div className='faq-wrap-inner'>
            {Object.keys(subjectFaqs).map((subject) => {
              return (
              <div key={subject} className='faq-subject'>
                <h4>
                  {subject === 'userManagement' ? '회원' : subject === 'orderPayment' ? '주문/결제' : subject === 'shipping' ? '배송' : subject === 'returnsExchanges' ? '취소/반품/교환' : '기타'}
                </h4>
                {subjectFaqs[subject].map((faq, index) => (
                  <Faq
                  key={index}
                  faq={faq}
                  activeFaq={activeFaq}
                  handleFaqClick={handleFaqClick}
                  />
                ))}
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQPage