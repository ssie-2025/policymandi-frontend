import React from 'react'
import './ContactTestimonial.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import aboutImg from '../../../assets/aboutImg.png'

function ContactTestimonial() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const testimonials = [
    {
      text: "Policy Mandi helped me find the best health insurance plan for my family. The process was quick and easy!",
      name: "Riya Sharma",
    },
    {
      text: "I compared several life insurance plans in minutes and saved a lot on premiums. Highly recommended!",
      name: "Amit Verma",
    },
    {
      text: "The team guided me to choose the right motor insurance policy. Hassle-free and reliable.",
      name: "Priya Singh",
    },
  ];
  return (
        <section className="conatact-testimonial-section">
      {/* Left Side Image */}
      <div className="testimonial-image">
        <img
          src={aboutImg}
          alt="testimonial"
        />
      </div>

      {/* Right Side Carousel */}
      <div className="testimonial-carousel">
        <h2>What Our Clients Have To Say</h2>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-item">
              <p className="testimonial-text">"{item.text}"</p>
              <p className="testimonial-name">- {item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>

  )
}

export default ContactTestimonial
