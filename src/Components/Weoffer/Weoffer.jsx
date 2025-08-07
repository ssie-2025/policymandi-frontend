import React from 'react'
import './Weoffer.css'
import about_icon1 from '../../assets/about_icon1.png';
import about_icon2 from '../../assets/about_icon2.png';
import about_icon3 from '../../assets/about_icon3.png';

function Weoffer() {
  return (
    <section className="services-wrapper">
      <h2 className="services-heading">What We Do</h2>
      <div className="services-container">
        <div className="service-card">
          <img src={about_icon1} alt="Icon 1" />
          <h4>Health Insurance</h4>
          <p>Health insurance protects you from high medical costs by covering hospital bills, treatments, and emergencies.</p>
        </div>
        <div className="service-card">
          <img src={about_icon2} alt="Icon 2" />
          <h4>Life Insurance</h4>
          <p>Life insurance provides financial security to your loved ones in case of your untimely demise, ensuring their future is protected.</p>
        </div>
        <div className="service-card">
          <img src={about_icon3} alt="Icon 3" />
          <h4>Motor Insurance</h4>
          <p>Motor insurance covers your vehicle against accidents, theft, and damages, ensuring peace of mind on every drive.</p>
        </div>
      </div>
    </section>
  )
}

export default Weoffer
