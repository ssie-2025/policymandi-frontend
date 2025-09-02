import React from 'react'
import './Contact.css'
import side_img from '../../../assets/about_img5.png'

function Contact() {
  return (
    <div className="life-insurance-contact">
        <section className="contact-section">
      <div className="contact-container">
        <div className="form-box">
          <h2>Contact Us</h2>
          <p>We're Here to Help – Reach Out Anytime</p>

          <form className="contact-form">
            <div className="input-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email Id" />
            <div className="input-row">
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="PIN Code" />
            </div>
            <textarea placeholder="Message" rows="5" />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-info">
          <img src={side_img} alt="" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact
