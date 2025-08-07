import React from 'react'
import './Contactsection.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";


function Contactsection() {
  return (
    <section className="contactus-wrapper">
      <div className="contact-box">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>
            Our team is here to assist you with any insurance queries or support.
          </p>

          <div className="contact-detail">
            <div className="icon">📍</div>
            <div>
              <h4>Head Office</h4>
              <p>Lorem, ipsum dolor <br />sit amet </p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="icon">✉️</div>
            <div>
              <h4>Email Us</h4>
              <p>policymandi@gmail.com<br />hello@policymandi.tld</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="icon">📞</div>
            <div>
              <h4>Call Us</h4>
              <p>Phone: +6221.2002.2012<br />Fax: +6221.2002.2013</p>
            </div>
          </div>

          <div className="social-icons">
            <h4>Follow our social media</h4>
            <div className="icons">
              <span><FaInstagramSquare /></span>
              <span><FaFacebookSquare /></span>
              <span><FaLinkedin /></span>
              <span><FaSquareTwitter /></span>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Company" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone" />
              <input type="email" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contactsection
