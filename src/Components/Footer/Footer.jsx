import React from 'react'
import './Footer.css'
import img from '../../assets/about_img2.jpg'
import logo from '../../assets/logo.png'
import { FaFacebook , FaInstagram , FaLinkedin, FaTwitter} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="newsletter">
        <img src={img} alt="Newsletter" className="newsletter-bg" />
        <div className="newsletter-overlay"></div>
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest updates, offers, and insurance tips delivered to your inbox.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer links */}
      <div className="footer-links">
        <div className="footer-column">
          <img src={logo} alt="" width={100} height={100}/>
          <p>policymandi@gmail.com</p>
          <p>
            Get the latest insurance insights, offers, and updates from PolicyMandi.
          </p>
          <div className="socialmedia-icons">
            <div className="icon"><FaFacebook /></div>
           <div className="icon"> <a href="https://www.instagram.com/policy_mandi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a></div>
           <div className="icon"> <FaLinkedin /></div>
           <a href=""></a> <div className="icon"><FaTwitter /></div>
          </div>
          {/*  */}
        </div>
        <div className="footer-column">
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>Blogs</li>
            <li>About Us</li>
            <li>Services</li>
            <li>404</li>
          </ul>
          {/* */}
        </div>
        <div className="footer-column">
           <h3>Quick Link</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Health Insurance</li>
            <li>Life Insurance</li>
            <li>Motor Insurance</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2022 Ketchen Template • All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
