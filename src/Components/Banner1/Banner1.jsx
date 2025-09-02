import React from 'react'
import './Banner1.css'
import img from '../../assets/heroImg2.png'

function Banner1() {
  return (
    <div>
      <section className="banner1-hero-section">
      {/* Text Section */}
      <div className="hero-text">
        <h4>Your Insurance Partner</h4>
        <h1>Find The Right Policy for You</h1>
        <p>
          Compare and buy motor, health, and life insurance with ease. 
          Get the best coverage at the right price in just a few clicks.
        </p>
        <div className="hero-buttons">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">Learn More</button>
        </div>
        <h4>Trusted by 10,000+ Customers</h4>
      </div>

      {/* Image Section */}
      <div className="hero-image">
        <img src={img} alt="Insurance illustration" />
      </div>
    </section>
    </div>
  )
}

export default Banner1
