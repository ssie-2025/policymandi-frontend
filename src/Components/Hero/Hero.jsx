import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ban_img1 from '../../assets/ban-img1.jpg'
import ban_img2 from '../../assets/ban-img2.jpg'
import ban_img3 from '../../assets/ban-img3.jpg'
import "./Hero.css"
import GetTouch from '../GetTouch/GetTouch';
import Banner2 from '../Banner2/Banner2';
import Banner3 from '../Banner3/Banner3';
import Banner1 from '../Banner1/Banner1';

function Hero() {
    const banners = [
        <Banner2 key="custom"/>,
        <Banner3 key="custom"/>,
        <Banner1 key="custom" />,
    ];

    const swiperRef = useRef(null);

    return (
       <div
         className="banner-slider"
         onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.pause()}
         onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.resume()}
       >
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        ref={swiperRef}
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            {typeof item === "string" ? (
              <img src={item} alt={`Banner ${index}`} className="banner-img" />
            ) : (
              item
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    )
}

export default Hero