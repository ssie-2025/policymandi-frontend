import React from 'react'
import './Contactpage.css'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle ,AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";


function Contactpage() {
    return (
        <div className="contact-container">
            <div className="contact-form-section">
                <h2>Contact Us</h2>
                <p className="subtitle">Our team is ready to assist you with any insurance queries or support needs.</p>
                <form className="contact-form">
                    <div className="name-fields">
                        <input type="text" placeholder="Enter your first name" />
                        <input type="text" placeholder="Enter your last name" />
                    </div>
                    <input type="email" placeholder="Enter your email" />
                    <div className="contact-details">
                        <select>
                            <option value="+971">+91</option>
                            {/* Add more country codes as needed */}
                        </select>
                        <input type="text" placeholder="Enter your contact number" />
                    </div>
                    <textarea placeholder="Enter your message"></textarea>
                    <button type="submit" className='btn'>Send a Message</button>
                </form>
            </div>

            <div className="contact-info-section">
                <p>Hi! We are always here to help you.</p>
                <div className="info-block">
                    <strong>Hotline:</strong>
                    <span>+971 56 498 3456</span>
                </div>
                <div className="info-block">
                    <strong>SMS / Whatsapp:</strong>
                    <span>+971 55 343 6433</span>
                </div>
                <div className="info-block">
                    <strong>Email:</strong>
                    <span>policymandi@gmail.com</span>
                </div>
                <hr />
                <div className="social-icons">
                   <a href="#"><FaFacebook /></a> 
                   <a href="#"><AiFillTwitterCircle /></a> 
                   <a href="#"><AiFillInstagram /></a> 
                   <a href="#"><FaLinkedin /></a> 
                </div>
            </div>
        </div>
    )
}

export default Contactpage
