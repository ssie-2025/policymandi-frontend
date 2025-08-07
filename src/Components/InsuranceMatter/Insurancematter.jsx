import React from 'react'
import './insurancematter.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import img1 from '../../assets/slider1.jpg'
import img2 from '../../assets/slider2.jpg'
import img3 from '../../assets/slider3.jpg'
import img4 from '../../assets/slider4.jpg'
import img5 from '../../assets/slider5.jpg'
import img6 from '../../assets/slider6.jpg'

function Insurancematter() {
    const slides = [
  {
    img: img1,
    title: 'Security for Your Family',
    desc: 'If something happens to you, your loved ones won’t struggle financially. They’ll have the support they need to move forward.'
  },
  {
    img: img2,
    title: 'Support During Emergencies',
    desc: 'Hospital bills, accidents, or sudden loss — insurance helps you handle costs without draining your savings.'
  },
  {
    img: img3,
    title: 'Protection for What You Own',
    desc: 'Your car, bike, home, or business — insurance protects what you’ve worked hard to build.'
  },
  {
    img: img4,
    title: 'Freedom from Financial Worries',
    desc: 'You can live, work, and plan freely — knowing that insurance has your back when life throws a curveball.'
  },
  {
    img: img5,
    title: 'Avoid Big Financial Losses',
    desc: 'A small premium today saves you from huge, unexpected expenses tomorrow.'
  },
  {
    img: img6,
    title: 'Peace of Mind for the Future',
    desc: 'Insurance gives you confidence that no matter what happens, you and your family are prepared and protected.'
  },
];
  return (
    <section className="actus-section">
      <h2 className="actus-title">Why Insurance Matter For Us?</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="actus-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="actus-card">
              <img src={slide.img} alt={slide.title} />
              <div className="card-content">
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Insurancematter
