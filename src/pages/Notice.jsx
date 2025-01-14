import React from 'react';
import '../styles/pages/Notice.css';
import SubMenu from '../components/SubMenu';
import NoticeTable from '../components/NoticeTable';
import notices from '../data/notices.json';
import { useState, useEffect } from 'react';
import { PiCaretLeftLight, PiCaretRightLight  } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';

const Notice = () => {
  //조회수올리기
  const [countHit, setCountHit] = useState(() => {
    const savedCountHit = JSON.parse(localStorage.getItem("countHit")) || {};
    return savedCountHit;
  });
  
  useEffect(() => {
    const savedCountHit = JSON.parse(localStorage.getItem("countHit")) || {};
    setCountHit(savedCountHit);
  }, []);
  
  const countUpdate = (id) => {
    setCountHit((prev) => {
      const updated = { ...prev, [id]: (prev[id] || 0) + 1 };
      localStorage.setItem("countHit", JSON.stringify(updated));
      return updated;
    });
  };

  //페이지네이션
  const rowPerPage = 1;
  const pageCount = Math.ceil(notices.length / rowPerPage);
  const [ currentPage, setCurrentPage ] = useState(0);

  const handlePagination = (num) => {
    setCurrentPage(num);
  };

  const currentNotices = notices.slice(currentPage * rowPerPage, (currentPage + 1) * rowPerPage);

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
    <section className={`notice sub-page ${isTablet ? 'responsive' : ''}`}>
      <div className="notice-inner sub-page-inner">
        <div className="sub-page-menu-wrap">
          <SubMenu />
        </div>
        <div className='notice-wrap'>
          {isTablet ? (
            <div></div>
          ) : (
            <h6>공지사항입니다.</h6>
          )}
          <div className='notice-box'>
            <table>
              <colgroup>
                <col className="col1"/>
                <col className="col2"/>
                <col className="col3"/>
                <col className="col4"/>
                <col className="col5"/>
              </colgroup>
              {isTablet ? (
                <div></div>
              ) : (
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>TITLE</th>
                    <th>NAME</th>
                    <th>DATE</th>
                    <th>HIT</th>
                  </tr>
                </thead>
              )}
              {currentNotices.map((notice, index) => (
                <NoticeTable
                key={index}
                notice={notice}
                countUpdate={countUpdate}
                countHit={countHit[notice.id] || 0}
                index={index}
                />
              ))}
            </table>
          </div>
          <div className="pagination-wrap">
              <PiCaretLeftLight
              onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)}
              />
              <div className="num-wrap">
                {Array.from({length: pageCount}).map((_,index) => (
                  <div
                  key={index}
                  className={`num ${index === currentPage ? 'active' : ''}`}
                  onClick={() => handlePagination(index)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
              <PiCaretRightLight
              onClick={() => currentPage < pageCount - 1 && setCurrentPage(currentPage + 1)}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notice