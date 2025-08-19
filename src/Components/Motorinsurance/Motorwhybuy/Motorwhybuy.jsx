import React from 'react'
import './Motorwhybuy.css'
import img1 from '../../../assets/motoinsurance/img1.jpeg'
import img2 from '../../../assets/motoinsurance/img2.jpg'
import img3 from '../../../assets/motoinsurance/img3.jpg'
import img4 from '../../../assets/motoinsurance/img4.jpg'
import { RiDoubleQuotesR } from "react-icons/ri";

function Motorwhybuy() {
  return (
     <section className="education-section">
      <div className="education-container">
        <div className="left-column">
          <div className="image-grid">
            <img src={img1} alt="Teacher" className="grid-image" />
            <img src={img2} alt="Students" className="grid-image" />
            <img src={img3} alt="Laptop Study" className="grid-image" />
            <img src={img4} alt="Learning" className="grid-image" />
          </div>
          
        </div>
        <div className="right-column">
         
          <h2 className="main-title">
             Why Buy from PolicyMandi?
          </h2>
          <div className="features">
            <div>
              <h4>✔ Expert Support</h4>
              <p>Our experienced insurance advisors are here to guide you every step of the way—from choosing the right plan to understanding policy terms.</p>
            </div>
            <div>
              <h4>✔ Multiple Insurer Comparison</h4>
              <p>Compare quotes, benefits, and features from leading insurance providers in one place. We help you make an informed choice that best suits your needs and budget.</p>
            </div>
            <div>
              <h4>✔ Hassle-Free Claim Assistance</h4>
              <p>Enjoy peace of mind with our smooth and transparent claims support. We help you file, track, and settle claims efficiently so you’re never left alone during stressful times.</p>
            </div>
          </div>
          
          <div className="contact">
            <button className="discover-btn">DISCOVER MORE +</button>
            <div className="call-info">
              📞 Call Now<br />
              <strong>+45 122 654 7888</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Motorwhybuy
