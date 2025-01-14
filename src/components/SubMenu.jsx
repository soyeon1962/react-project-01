import React from 'react';
import '../styles/components/SubMenu.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SubTitle from './SubTitle';

const SubMenu = () => {
  const pathName = useLocation().pathname;

  const menus = [
    {name : "FAQ", path : '/faq'},
    {name : "NOTICE", path : '/notice'},
    {name : "EVENT", path : '/event'},
    {name : "Q&A", path : '/qna'},
    {name : "REVIEW", path : '/review'},
    {name : "EXCHANGE", path : '/exchange'},
  ];

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
    <div className={`sub-page-menu ${isTablet ? 'responsive' : ''}`}>
      {isTablet ? (
        <div>
          {menus.map((menu, index) => {
            return(
              <SubTitle
              menu={menu}
              isActive={pathName === menu.path ? true : false}
              />
            )
          })}
        </div>
      ) : (
        <div>
          {menus.map((menu, index) => {
            return(
              <SubTitle
              menu={menu}
              isActive={pathName === menu.path ? true : false}
              />
            )
          })}
          <ul>
            <li>
              <Link to="/faq">FAQ</Link>
              <Link to="/notice">NOTICE</Link>
              <Link to="/event">EVENT</Link>
              <Link to="/qna">Q&A</Link>
              <Link to="/review">REVIEW</Link>
              <Link to="/exchange">EXCHANGE</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SubMenu