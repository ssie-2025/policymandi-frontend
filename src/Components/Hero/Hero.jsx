import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ban_img1 from '../../assets/ban-img1.jpg'
import ban_img2 from '../../assets/ban-img2.jpg'
import ban_img3 from '../../assets/ban-img3.jpg'
import "./Hero.css"

function Hero() {
    const banners = [
        ban_img1,
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
                {banners.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`Banner ${index}`} className="banner-img" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Hero
