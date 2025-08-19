import React, { useState } from 'react'
import './Flipcard.css'

function Flipcard({ imageSrc, title, description }) {

  return (

    // <div className="flip-card">
    //   <div className="flip-card-inner">
    //     <div className="flip-card-front">
    //       <h2>{title}</h2>
    //     </div>
    //     <div className="flip-card-back" 
    //     style={{backgroundImage: imageSrc ? `url(${imageSrc})` : `none`}}>
    //       <div className="flip-card-back-overlay"></div>
    //       <div className="flip-card-back-content">
    //         <p>{description}</p>
    //       </div>
    //     </div>
    //   </div>
    //   </div>

     <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
           <h2>{title}</h2>
          
        </div>
        <div className="flip-card-back"
        style={{backgroundImage: imageSrc ? `url(${imageSrc})` : `none`}}>
          <div className="flip-card-back-overlay"></div>
          <div className="flip-card-back-content">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>

   
  )
}

export default Flipcard
