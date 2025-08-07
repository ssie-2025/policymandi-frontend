import React, { useState } from 'react'
import './Flipcard.css'

function Flipcard({ imageSrc, title, description }) {
    // const [flipped, setFlipped] = useState(false);
  return (

     <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} alt="Card Front" />
        </div>
        <div className="flip-card-back">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>

    // <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
    //   <div className="flip-card-inner">
    //     <div className="flip-card-front">
    //       <img src={image} alt="Project" />
    //     </div>
    //     <div className="flip-card-back">
    //       <h3>{heading}</h3>
    //       <p>{description}</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Flipcard
