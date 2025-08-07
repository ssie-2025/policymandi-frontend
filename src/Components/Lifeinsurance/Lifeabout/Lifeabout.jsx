import React from 'react'
import './Lifeabout.css'
import lifeinsurance from '../../../assets/lifeinsurance/lifeinsurance1.jpg'

function Lifeabout() {
  return (
    <section className="tax-attorney-container">
      <div className="tax-attorney-content">
        <div className="image-section">
          <img
            src={lifeinsurance}
            alt="Tax attorney consultation"
          />
        </div>

        <div className="text-section">
          <div className="label">About Us</div>
          <h2>Life Insurance<br />with Policy Mandi</h2>
          <p>
           Secure your family’s future, today.
            <br />
            <br />
           At Policy Mandi, we help you find the perfect life insurance plan — 
           one that gives your loved ones financial protection, peace of mind,
           and a strong foundation for tomorrow.
           </p>
          <div className="stats">
            <div>
              <strong>20+</strong>
              <p>Experience Staff</p>
            </div>
            <div>
              <strong>10k+</strong>
              <p>Plans succsfull</p>
            </div>
            <div>
              <strong>20k</strong>
              <p>Happy clint</p>
            </div>
          </div>

          <button className="cta-button">Begin Your Insurance Journey</button>
        </div>
      </div>
    </section>
  )
}

export default Lifeabout
