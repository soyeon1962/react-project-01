import React from 'react';
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { useState, useEffect } from 'react';

const NoticeTable = ({notice, countUpdate, countHit, index }) => {
  
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
      <tbody>
        {isTablet ? (
        <tr className='notice-item'>
          <td>{notice.no === "1" ? (
            notice.no
          ) : (
            <PiBookmarkSimpleFill />
          )}</td>
          <td onClick={() => countUpdate(notice.id)}>{notice.title}</td>
          <td>{notice.name}</td>
          <td>{notice.date}</td>
          <td>{countHit[notice.id] || 0}</td>
        </tr>
        ) :(
          <tr className='notice-item'>
            <td>{notice.no === "1" ? (
              notice.no
            ) : (
              <PiBookmarkSimpleFill />
            )}</td>
            <td onClick={() => countUpdate(notice.id)}>{notice.title}</td>
            <td>{notice.name}</td>
            <td>{notice.date}</td>
            <td>{countHit[notice.id] || 0}</td>
          </tr>
        )}
      </tbody>
  )
}

export default NoticeTable