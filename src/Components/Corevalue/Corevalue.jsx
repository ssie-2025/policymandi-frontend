import React,{ useRef }from 'react'
import './Corevalue.css'
import Heading from '../Heading/Heading';

const data = [
  {
    title: "Trust",
    desc: "No pushy sales. No hidden charges. Just honest help",
  },
  {
    title: "Simplicity",
    desc: "Insurance should be easy to understand — and we make it so.",
  },
  {
    title: "Customer-First",
    desc: "Every decision we make is with the customer’s benefit in mind.",
  },
  {
    title: "Transparency",
    desc: "What you see is what you get — no fine print surprises.",
  },
  {
    title: "Support for life",
    desc: "From policy to claim, we're always by your side",
  },
  {
    title: "Innovation",
    desc: "We Continously improve to serve you better with smarter faster solution",
  }
];


function Corevalue() {

  const scrollRef = useRef(null);

  const scroll = (dir) =>{
    const {current} = scrollRef;
    if(dir === "left") current.scrollBy({left: -300, behaviour: "smooth"});
    else current.scrollBy({left: 300, behaviour: "smooth"});
  };

    
  return (
    <div className="text-carousel-wrapper">
      <Heading title="The Core value" subTitle="Guided by Trust. Driven by Integrity."/>
      <div className="carousel-box">
        <button className="arrow left" onClick={() => scroll("left")}>&#8249;</button>

        <div className="carousel-track" ref={scrollRef}>
          {data.map((item, idx) => (
            <div className="card" key={idx}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll("right")}>&#8250;</button>
      </div>
    </div>
  )
}

export default Corevalue
