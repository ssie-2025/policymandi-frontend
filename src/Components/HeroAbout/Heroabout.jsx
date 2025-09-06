import React from 'react'
import './Heroabout.css'


function Heroabout({heading, subheading, backgroundImage}) {
  return (

      <section className="about-hero"
      style={{
        background: `linear-gradient(rgba(248, 79, 13, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage}) no-repeat center/cover`,
      }}>
      <div className="about-content">
        <h1>{heading}</h1>
        {/* <h1>About Us</h1> */}
        <p>{subheading}</p>
      </div>
    </section>
    
  )
}

export default Heroabout
