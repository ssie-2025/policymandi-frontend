import React from 'react'
import './Motorwhybuy.css'
import side_img from '../../../assets/motoinsurance/aboutImg3.png'
import { MdAddCall } from "react-icons/md";

function Motorwhybuy() {
  return (
     <section className="education-section">
      <div className="education-container">
        <div className="left-column">
          <div className="image-grid">
            <img src={side_img} alt="" />
          </div>
          
        </div>
        <div className="right-column">
         
          <h2 className="main-title">
             Why Buy from PolicyMandi?
          </h2>
          <div className="features">
            <div>
              <h4>Expert Support</h4>
              <p>Our experienced insurance advisors are here to guide you every step of the way—from choosing the right plan to understanding policy terms.</p>
            </div>
            <div>
              <h4>Multiple Insurer Comparison</h4>
              <p>Compare quotes, benefits, and features from leading insurance providers in one place. We help you make an informed choice that best suits your needs and budget.</p>
            </div>
            <div>
              <h4>Hassle-Free Claim Assistance</h4>
              <p>Enjoy peace of mind with our smooth and transparent claims support. We help you file, track, and settle claims efficiently so you’re never left alone during stressful times.</p>
            </div>
          </div>
          
          <div className="contact">
            <button className="discover-btn">DISCOVER MORE +</button>
            <div className="call-info">
              <MdAddCall /> Call Now<br />
              <strong>+45 122 654 7888</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Motorwhybuy
