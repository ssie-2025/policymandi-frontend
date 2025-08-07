import React, { useEffect, useState } from 'react'
import './Scrolltopbtn.css'

function Scrolltopbtn() {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    
       isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </button>
    )
  )
}

export default Scrolltopbtn
