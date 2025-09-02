import React from 'react'
import './ContactInfo.css'
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

function ContactInfo() {
    return (
        <section className="contactInfo-section">
            <h2 className="contact-title">Protect What Matters Most</h2>
            <p className="contact-subtitle">
                Insurance isn’t just about policies and paperwork—it’s about giving your
                family financial security, safeguarding your health, and ensuring peace of mind
                when life takes an unexpected turn.
            </p>

            <div className="contact-info">
                <div className="contact-card">
                    <FaPhoneAlt className="contact-icon" />
                    <p>123-456-7890</p>
                </div>
                <div className="contact-card">
                    <FaEnvelope className="contact-icon" />
                    <p>policymandi@gmail.com</p>
                </div>
                <div className="contact-card">
                    <FaGlobe className="contact-icon" />
                    <p>policymandi.com</p>
                </div>
                <div className="contact-card">
                    <FaMapMarkerAlt className="contact-icon" />
                    <p>12B, Lucknow, Delhi</p>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
