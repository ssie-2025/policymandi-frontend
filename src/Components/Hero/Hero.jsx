import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ban_img1 from '../../assets/ban-img1.jpg'
import ban_img2 from '../../assets/ban-img2.jpg'
import ban_img3 from '../../assets/ban-img3.jpg'
import "./Hero.css"
import GetTouch from '../GetTouch/GetTouch';

function Hero() {
    const banners = [
        <GetTouch key="custom" />,
        ban_img2,
        ban_img3,
    ];

    return (
       <div className="banner-slider">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
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
