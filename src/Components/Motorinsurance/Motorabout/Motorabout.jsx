import React from 'react'
import './Motorabout.css'
import about_img from '../../../assets/motoinsurance/aboutImg2.png'

function Motorabout() {
  return (
    <section className="motor-about-container">
      <div className="about-image">
        <img src={about_img} alt="Video Editing Desk" />
      </div>
      <div className="motor-about-content">
        <h2>About Motor Insurance</h2>
        <h1>Secure Your Drive with the <br/>Right Motor Insurance</h1>
        <p className="motor-about-text">
          Motor insurance is a vital financial safeguard for vehicle owners,
        offering protection against unexpected expenses arising from road 
        accidents, theft, fire, or natural disasters.
        </p>
        <p>
            In India, having at least third-party motor insurance is mandatory 
            under the Motor Vehicles Act, ensuring that any damage or injury 
            caused to others is legally covered. 
        </p>
        <button className="motor-contact-btn">Contact Us</button>
      </div>
    </section>
  )
}

export default Motorabout
