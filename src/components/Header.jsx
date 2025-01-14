import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import { PiInstagramLogoLight, PiFinnTheHumanThin, PiFinnTheHumanLight, PiGenderNeuterLight, PiGlobeHemisphereEastLight, PiHandbagSimpleLight, PiListLight, PiListThin } from "react-icons/pi";

const Header = () => {
  //반응형
  const [ isLargeScreen, setIsLargeScreen ] = useState(window.innerWidth <= 1250);
  const [ isTablet, setIsTablet ] = useState(window.innerWidth <= 1024);
  const [ isMobile, setIsMobile ] = useState(window.innerWidth <= 838);

  const responsiveRender = () => {
    setIsLargeScreen(window.innerWidth <= 1250);
    setIsTablet(window.innerWidth <=1024);
    setIsMobile(window.innerWidth <= 838);
  };

  useEffect(() => {
    window.addEventListener('resize', responsiveRender);
    return() => {
      window.removeEventListener('resize', responsiveRender);
    };
  });

  //서브메뉴 active
  const [ activeMenu, setActiveMenu ] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleClick = (menu) => {
    setActiveMenu((burger) => (burger === menu ? null : menu))
  };

  //서브메뉴 tap
  const [ activeTap, setActiveTap ] = useState('shop');

  return (
    <header className='header'>
      <div className={`header-inner ${isTablet ? 'header-tablet' : 'header-desktop'}`}>
        {isTablet ? (
          <nav className='nav'>
            <PiListLight className='icon burger-icon' onClick={() => handleClick('subMenuTablet')}/>
          </nav>
        ) : isLargeScreen ? (
          <nav className='nav'>
            <Link to="/shop" onMouseEnter={() => handleMouseEnter('subMenu')} onMouseLeave={() => handleMouseLeave()}><p>SHOP</p></Link>
            <Link to="/collection" onMouseEnter={() => handleMouseEnter('subMenu')} onMouseLeave={() => handleMouseLeave()}><p>COLLECTION</p></Link>
            <Link to="/notice" onMouseEnter={() => handleMouseEnter('subMenu')} onMouseLeave={() => handleMouseLeave()}><p>COMMUNITY</p></Link>
            <Link to="/customer" onMouseEnter={() => handleMouseEnter('subMenu')} onMouseLeave={() => handleMouseLeave()}><p>CUSTOMER</p></Link>
          </nav>
        ) : (
          <nav className='nav'>
            <Link to="/shop" onMouseEnter={() => handleMouseEnter('subMenu')} onMouseLeave={() => handleMouseLeave()}><p>1 SHOP</p></Link>
            <Link to="/collection" onMouseEnter={() => handleMouseEnter('subMenu')} onMouseLeave={() => handleMouseLeave()}><p>2 COLLECTION</p></Link>
            <Link to="/notice" onMouseEnter={() => handleMouseEnter('subMenu')} onMouseLeave={() => handleMouseLeave()}><p>3 COMMUNITY</p></Link>
            <Link to="/customer" onMouseEnter={() => handleMouseEnter('subMenu')} onMouseLeave={() => handleMouseLeave()}><p>4 CUSTOMER</p></Link>
          </nav>
        )}
        <div className={`main-logo ${isTablet ? 'main-logo-tablet' : 'main-logo-desktop'}`}>
          <Link to="/">
            <span>MATIE STUDIO</span>
          </Link>
        </div>
        {isTablet ? (
          <div className='header-icons'>
            <Link to="/cart"><PiHandbagSimpleLight className='icon'/></Link>
            <PiFinnTheHumanLight className='icon user-icon' onMouseEnter={() => handleMouseEnter('user')} onMouseLeave={() => handleMouseLeave()}/>
            <PiGenderNeuterLight  className='icon search-icon' onClick={() => handleClick('search')}/>
          </div>
        ) : (
          <div className='header-icons'>
          <PiInstagramLogoLight className='icon'/>
          <PiGenderNeuterLight  className='icon search-icon' onClick={() => handleClick('search')}/>
          <PiFinnTheHumanLight className='icon user-icon' onMouseEnter={()=>handleMouseEnter('user')} onMouseLeave={()=>handleMouseLeave()}/>
          <Link to="/cart"><PiHandbagSimpleLight className='icon'/></Link>
          <PiGlobeHemisphereEastLight className='icon'/>
        </div>
        )}
      </div>
      <div className={`search-box ${activeMenu === 'search' ? 'active' : ''} ${isTablet ? 'search-tablet' : 'search-desktop'}`}>
        <div className="search-text-box">
          <Link to="/result/상점관리">상점관리</Link>
          <Link to="/result/운영관리">운영관리</Link>
          <Link to="/result/상품검색설정">상품검색설정</Link>
          <Link to="/result/인기검색어">인기검색어</Link>
        </div>
        <div className="search-input-box">
          <input type="text" placeholder='검색어를 입력하세요' />
          <PiGenderNeuterLight  className='icon search-icon'/>
        </div>
      </div>
      <div className={`user-box ${activeMenu === 'user' ? 'active' : ''} ${isTablet ? 'user-box-tablet' : 'user-box-desktop'}`} onMouseEnter={() => handleMouseEnter('user')} onMouseLeave={() => handleMouseLeave()}>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
        <Link to="/orderhistory">주문조회</Link>
      </div>
      {isTablet ? (
        <div className="sub-menu-responsive">
          <div className={`sub-menu-responsive-inner ${activeMenu === 'subMenuTablet' ? 'active' : ''}`}>
            <div className="sub-menu-btn-wrap">
              <span onClick={() => setActiveTap('shop')} className={activeTap === 'shop' ? 'active' : ''}>SHOP</span>
              <span onClick={() => setActiveTap('collection')} className={activeTap === 'collection' ? 'active' : ''}>COLLECTION</span>
              <span onClick={() => setActiveTap('customer')} className={activeTap === 'customer' ? 'active' : ''}>C/S</span>
            </div>
            <div className={`shop-menu-box menu-box ${activeTap === 'shop' ? 'active' : ''}`}>
              <Link to="/shop/new">NEW 5%</Link>
              <Link to="/shop/outer">OUTER</Link>
              <Link to="/shop/top">TOP</Link>
              <Link to="/shop/dress">DRESS</Link>
              <Link to="/shop/pants">PANTS</Link>
              <Link to="/shop/skirt">SKIRT</Link>
              <Link to="/shop/bag">BAG</Link>
              <Link to="/shop/shoes">SHOES</Link>
              <Link to="/shop/jewelry">JEWELRY</Link>
              <Link to="/shop/accessory">ACCESSORY</Link>
              <Link to="/shop/personalpay">PERSONAL PAY</Link>
            </div>
            <div className={`collection-menu-box menu-box ${activeTap === 'collection' ? 'active' : ''}`}>
              <Link to="/season/25ss">25 S/S</Link>
              <Link to="/season/24fw">24 F/W</Link>
              <Link to="/season/24ss">24 S/S</Link>
              <Link to="/season/23fw">23 F/W</Link>
              <Link to="/season/23ss">23 S/S</Link>
              <Link to="/season/22fw">22 F/W</Link>
              <Link to="collection" className='more-btn'>VIEW ALL</Link>
            </div>
            <div className={`customer-menu-box menu-box ${activeTap === 'customer' ? 'active' : ''}`}>
              <Link to="/faq">FAQ</Link>
              <Link to="/notice">NOTICE</Link>
              <Link to="/event">EVENT</Link>
              <Link to="/qna">Q&A</Link>
              <Link to="/review">REVIEW</Link>
              <Link to="/exchange">EXCHANGE</Link>
            </div>
            <div className='customer-text'>
              <span>C/S CENTER</span>
              <span>1599-3360 | MON_FRI 10:00 - 17:00</span>
              <span>SAT / SUN / HOLIDAY OFF</span>
              <br/>
              <span>BANKING</span>
              <span>제일은행 505-20-558526, 예금주 김덕현</span>
            </div>
          </div>
        </div>
      ) : (
        <div className='sub-menu' onMouseEnter={() => handleMouseEnter('subMenu')} onMouseLeave={() => handleMouseLeave()}>
          <div className={`sub-menu-inner ${activeMenu === 'subMenu' ? 'active' : ''}`}>
            <div className="sub-shop sub-box">
              <h6><Link to="/shop">SHOP</Link></h6>
              <div className="shop-menu-box">
                <div className='sub-menu-wrap'>
                  <Link to="/shop/new">NEW 5%</Link>
                  <Link to="/shop/outer">OUTER</Link>
                  <Link to="/shop/top">TOP</Link>
                  <Link to="/shop/dress">DRESS</Link>
                  <Link to="/shop/pants">PANTS</Link>
                  <Link to="/shop/skirt">SKIRT</Link>
                </div>
                <div className='sub-menu-wrap'>
                  <Link to="/shop/bag">BAG</Link>
                  <Link to="/shop/shoes">SHOES</Link>
                  <Link to="/shop/jewelry">JEWELRY</Link>
                  <Link to="/shop/accessory">ACCESSORY</Link>
                  <Link to="/shop/personalpay">PERSONAL PAY</Link>
                </div>
              </div>
            </div>
            <div className="sub-collection sub-box">
              <h6><Link to="/season">COLLECTION</Link></h6>
              <div className='sub-menu-wrap'>
                <Link to="/season/25ss">25 S/S</Link>
                <Link to="/season/24fw">24 F/W</Link>
                <Link to="/season/24ss">24 S/S</Link>
                <Link to="/season/23fw">23 F/W</Link>
                <Link to="/season/23ss">23 S/S</Link>
                <Link to="/season/22fw">22 F/W</Link>
              </div>
            </div>
            <div className="sub-community sub-box">
              <h6><Link to="/notice">COMMUNITY</Link></h6>
              <div className='sub-menu-wrap'>
                <Link to="/faq">FAQ</Link>
                <Link to="/notice">NOTICE</Link>
                <Link to="/event">EVENT</Link>
                <Link to="/qna">Q&A</Link>
                <Link to="/review">REVIEW</Link>
                <Link to="/exchange">EXCHANGE</Link>
              </div>
            </div>
            <div className="sub-customer sub-box">
              <h6><Link to="/customercare">CUSTOMER CARE</Link></h6>
              <div className='sub-menu-wrap'>
                <span>C/S CENTER</span>
                <span>1599-3360 | MON_FRI 10:00 - 17:00</span>
                <span>SAT / SUN / HOLIDAY OFF</span>
                <br/>
                <span>BANKING</span>
                <span>제일은행 505-20-558526, 예금주 김덕현</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header