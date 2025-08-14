import React from 'react'
import './Whyus.css'
import side_img from '../../assets/about_img5.png'
import { Link } from 'react-router-dom'

function Whyus() {
  return (
    <section className="hero-section">
      <div className="overlay"></div>

      <div className="hero-content">
        <div className="hero-left">
          <h1>Your Trusted Insurance Partner</h1>
          <p>Get expert advice, transparent pricing, and coverage tailored just for you.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary"><Link to="/calculator">Get a Quote</Link></button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={side_img} alt="Hero Visual" />
        </div>
      </div>
    </section>
  )
}

export default Whyus
