import React, { useState, useEffect } from 'react';

import '../scss/IconScroll.scss';

export default function IconScroll() {
  const [scrollY, setScrollY] = useState(0);

  function handleScroll() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', handleScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <div className={`icon-scroll  ${scrollY > 50 && 'hide-icon-scroll'}`}>
        <span className="title-scroll">SCROLL</span>
      </div>
    </>
  );
}
