import React from 'react'
import './Motorpayment.css'
import left_img from '../../../assets/motoinsurance/img-about3.png'
import { PiAirplaneTiltFill } from "react-icons/pi";

function Motorpayment() {
  return (
     <section className="modern-solutions">
      <div className="content-wrapper">
     
        <div className="left-image">
          <img
            src={left_img}
            alt="Team Working"
          />
        </div>

       
        <div className="right-text">
          <h4>Welcome to the Policymandi</h4>
          <h2>💰 Premium & Payment Options</h2>
          <p>
            At PolicyMandi, your premium is calculated based on your vehicle’s make, model, age, location, and usage type. We ensure fair and competitive pricing that reflects your vehicle profile. Choose from multiple payment plans—whether annual, semi-annual, or monthly—designed to suit your convenience and cash flow. Enjoy the flexibility to pay how and when it works best for you.
          </p>

          <ul className="features">
            <li><PiAirplaneTiltFill /> Good Plan strategy</li>
            <li><PiAirplaneTiltFill /> Quality Insurance</li>
          </ul>

          <div className="author-section">
            <div>
              <strong>Akshit Pandey</strong>
              <p>CEO & Co Founder</p>
            </div>
            <div className="experience-box">
              <h3>10</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Motorpayment
