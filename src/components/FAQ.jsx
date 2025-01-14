import React from 'react';
import { PiCaretDownLight } from "react-icons/pi";

const Faq = ({ faq, activeFaq, handleFaqClick }) => {
  return (
    <div className='faq-accordion'>
      <h6 onClick={() => handleFaqClick(faq.title)}>{faq.title}<PiCaretDownLight/></h6>
      <span className={activeFaq === faq.title ? 'active' : ''}>{faq.text}</span>
    </div>
  )
}

export default Faq