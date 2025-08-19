import React, { useRef } from 'react'
import './Howitwork.css'

const cardData = [
  {
    id: 1,
    title: 'Choose Your Plan',
    description: "Browse and compare various life insurance options based on your needs. Whether it's term insurance or savings-linked plans, pick one that fits your goals and budget.",
  },
  {
    id: 2,
    title: 'Submit Your Application',
    description: 'Fill in your personal, financial, and health details in a secure online form. This helps insurers assess your profile and coverage eligibility.',
  },
  {
    id: 3,
    title: 'Medical Check-Up (If Required)',
    description: 'Depending on your age, policy amount, or medical history, a basic health check-up may be scheduled at your home or nearby clinic—at no extra cost.',
  },
  {
    id: 4,
    title: 'Get Your Policy Issued',
    description: 'After successful verification and approval, your policy document is issued and delivered digitally or physically. You are now officially covered.',
  },
  {
    id: 5,
    title: 'Easy Claim Settlement',
    description: 'In the event of a claim, your nominee can submit documents online. Our team works with the insurer to ensure fast, smooth, and transparent settlement.',
  }
];

function Howitwork() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const {current}= scrollRef;
        const scrollAmount = 300;
        if(direction === "left"){
            current.scrollBy({left: -scrollAmount, behavior: 'smooth'});
        }else{
            current.scrollBy({left: scrollAmount, behavior: 'smooth'});
        }
    };

  return (
    <section className="howitwork-scroll-section">
        <div className="background-img">
      <h2>How it Work?</h2>
      <p>We make buying life insurance simple, transparent, and stress-free. 
        Here’s how the process works from start to finish:</p>
        </div>
      <div className="scroll-container-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>&lt;</button>
        <div className="scroll-container" ref={scrollRef}>
          {cardData.map((card, index) => (
            <div className="scroll-card" key={card.id}>
              <div className="circle">{`0${index + 1}`}</div>
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
               <a href="#">Read More</a>
             </div>
          ))}
         </div>
         <button className="scroll-btn right" onClick={() => scroll('right')}>&gt;</button>
       </div>
       <button className="view-all-btn">View All Services</button>
     </section>
  )
}

export default Howitwork
