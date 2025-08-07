import React, { useEffect, useRef, useState } from 'react';
import './Brandcarousel.css'
import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'
import brand5 from '../../assets/brand5.jpeg'
import brand6 from '../../assets/brand6.png'
import brand7 from '../../assets/brand7.png'

function Brandcarousel() {
  //  const sliderRef = useRef(null);
  // const [pause, setPause] = useState(false);

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   let animationId;

  //   function scrollSlider() {
  //     if (!pause && slider) {
  //       slider.scrollLeft += 1;
  //       if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
  //         slider.scrollLeft = 0; // reset for infinite scroll
  //       }
  //     }
  //     animationId = requestAnimationFrame(scrollSlider);
  //   }

  //   animationId = requestAnimationFrame(scrollSlider);

  //   return () => cancelAnimationFrame(animationId);
  // }, [pause]);

  // const handleClick = () => {
  //   setPause(!pause);
  // };

  return (

  <div className="logos">
    <div className="logo-slide">
      <img src={brand1} alt="brand1" />
      <img src={brand2} alt="brand2" />
      <img src={brand3} alt="brand3" />
      <img src={brand4} alt="brand4" />
      <img src={brand5} alt="brand5" />
      <img src={brand6} alt="brand6" />
      <img src={brand7} alt="brand7" />
    </div>
    <div className="logo-slide">
      <img src={brand1} alt="brand1" />
      <img src={brand2} alt="brand2" />
      <img src={brand3} alt="brand3" />
      <img src={brand4} alt="brand4" />
      <img src={brand5} alt="brand5" />
      <img src={brand6} alt="brand6" />
      <img src={brand7} alt="brand7" />
    </div>
  </div>
    //    <div className="slider-container">
    //   <div className="slider" ref={sliderRef}>
    //     {/* Perfume cards (repeated manually, no .map()) */}
    //     <div className="product-card" onClick={handleClick}>
    //       <img src={brand1} alt="Velvet Aura" />
    //     </div>

    //     <div className="product-card" onClick={handleClick}>
    //       <img src={brand2} alt="Imperial Mist" />
    //     </div>

    //     <div className="product-card" onClick={handleClick}>
    //       <img src={brand3} alt="Opaline Bloom" />
    //     </div>

    //     <div className="product-card" onClick={handleClick}>
    //       <img src={brand4} alt="Noir Royale" />
    //     </div>

    //     <div className="product-card" onClick={handleClick}>
    //       <img src={brand5} alt="Saffron Whisper" />
    //     </div>

    //     {/* Duplicate for infinite loop */}
    //     <div className="product-card" onClick={handleClick}>
    //       <img src={brand6} alt="Velvet Aura" />
    //     </div>

    //     <div className="product-card" onClick={handleClick}>
    //       <img src={brand7} alt="Imperial Mist" />
    //     </div>
    //   </div>
    // </div>
  )
}



export default Brandcarousel;
