import React from 'react'
import './Aboutinsurance.css'
import side_img from '../../../assets/HealthInsurance/healthinsurance.png'

function Aboutinsurance() {
  return (
    <section className="health-about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>🤝 Why Health Insurance from PolicyMandi?</h2>
          <h4>Trusted Advice. Transparent Plans. Total Peace of Mind.</h4>
          <p>
            Vivamus fermentum magna non faucibus dignissim. Sed a venenatis mi, vel
            tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam
            cursus augue.
          </p>
          <h5> What Makes PolicyMandi Different?</h5>
          <ul className="about-list">
            <li>➤ Curated plans from India’s leading insurers</li>
            <li>➤ 100% transparent comparisons — no hidden clauses</li>
            <li>➤ Cashless claim support across 10,000+ hospitals</li>
            <li>➤ Expert help for claim assistance and renewals</li>
            <li>➤ Free consultation with zero commission bias</li>
          </ul>
          <div className="about-buttons">
            <button className="btn primary">Contact Us</button>
            <button className="btn secondary">Get a Quote</button>
          </div>
        </div>

        <div className="about-image">
          <img src={side_img} alt="agent" />
        </div>
      </div>
    </section>
  )
}

export default Aboutinsurance
