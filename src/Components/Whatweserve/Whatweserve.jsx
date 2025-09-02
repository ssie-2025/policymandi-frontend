import React from 'react'
import './Whatweserve.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Whatweserve() {
    const cards = [
    {
      title: "Health Insurance",
      subtitle: "Book Free Health Insurance Consultation at home",
      button: "Book home visit",
      color: "#2980b9"
    },
    {
      title: "SIP Calculator",
      subtitle: "Reach your financial goals. Make investment simple.",
      button: "Calculate Now",
      color: "#e74c3c"
    },
    {
      title: "Health Insurance",
      subtitle: "Book Free Health Insurance Consultation at home",
      button: "Book home visit",
      color: "#2980b9"
    },
    {
      title: "SIP Calculator",
      subtitle: "Reach your financial goals. Make investment simple.",
      button: "Calculate Now",
      color: "#e74c3c"
    }
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
     <div className="whatweserve-offer-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="offer-card" style={{ background: card.color }}>
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
            <button>{card.button}</button>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Whatweserve
