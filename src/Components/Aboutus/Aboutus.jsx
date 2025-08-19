import React from 'react'
import './Aboutus.css'
import about_img1 from '../../assets/about.jpg' 

function Aboutus() {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        <div className="about-image">
          <img src={about_img1} alt="About us" />
        </div>
        <div className="about-text">
          <h2>Who We Are</h2>
          <div className="underline"></div>
          <p>
           At PolicyMandi, we are more than just an insurance platform — 
           we are your trusted partner in financial protection. Founded with
            a vision to simplify the way people understand and choose insurance, 
            PolicyMandi brings transparency, convenience, and clarity to a complex industry.
          </p>
          <p>
            We believe that everyone deserves access to insurance plans that truly fit 
            their needs — without hidden terms, overwhelming paperwork, or confusing jargon. 
            Whether you're securing your health, life, vehicle, or travels, we make it easy
             to compare, customize, and confidently choose the right policy.
          </p>
        </div>
        <div className="about-bg-box"></div>
      </div>
    </section>
  )
}

export default Aboutus
