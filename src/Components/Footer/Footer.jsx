import React from 'react'
import './Footer.css'

function Footer() {
  return (
     <footer className="footer">
      {/* Newsletter */}
      <div className="newsletter">
        <h2>Our Newsletters</h2>
        <p>
          Stay informed with expert tips, updates, and smart insurance choices—right in your inbox.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Submit</button>
        </form>
        <p className="footer-website">Policymandi.in</p>
      </div>

      {/* Footer links */}
      <div className="footer-links">
        <div className="footer-column">
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>Blogs</li>
            <li>About Us</li>
            <li>Services</li>
            <li>404</li>
          </ul>
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
        <div className="footer-column">
          <h3>Our Email-id</h3>
          <p>policymandi@gmail.com</p>
          <p>
           Get the latest insurance insights, offers, and updates from PolicyMandi.
          </p>
          <button className="call-btn">📞 Call Us</button>
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
