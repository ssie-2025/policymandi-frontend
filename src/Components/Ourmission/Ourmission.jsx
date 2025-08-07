import React from 'react'
import './Ourmission.css'
import main_img from '../../assets/about_img2.jpg'
import side_img from '../../assets/about-img3.webp'


function Ourmission() {
  return (
    <div className="mission-section">
      <div className="mission-image">
        <img src={main_img} alt="Target" />
      </div>
      <div className="mission-content">
        <h2>Our Mission</h2>
        <p className="subtitle">
          To simplify insurance and make protection accessible to every Indian household
        </p>
        <p className="mission-desc">
          <strong>We’re on a mission</strong> to remove confusion and bring clarity to insurance decisions.
          With the right information, real human guidance, and smart tools — we help people protect their lives,
          health, and future.
        </p>
        <a href="#contact" className="mission-btn">Contact Now</a>
      </div>
    </div>
  )
}

export default Ourmission
