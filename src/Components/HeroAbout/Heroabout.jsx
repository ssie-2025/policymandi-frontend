import React from 'react'
import './Heroabout.css'


function Heroabout({heading, subheading}) {
  return (

      <section className="about-hero">
      <div className="about-content">
        <h1>{heading}</h1>
        {/* <h1>About Us</h1> */}
        <p>{subheading}</p>
        {/* <p>
          On a mission to redefine how India experiences insurance.
        </p> */}
      </div>
    </section>
    
  )
}

export default Heroabout
