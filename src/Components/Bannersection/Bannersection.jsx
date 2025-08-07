import React from 'react'
import './Bannersection.css'
import { FaEye, FaNetworkWired, FaMagic } from 'react-icons/fa';
import { IoMdHappy } from "react-icons/io";
import { RiServiceFill } from "react-icons/ri";
import { AiFillCustomerService } from "react-icons/ai";

function Bannersection() {
  return (
    <section className="banner-section">
      <div className="banner-overlay">
        <div className="banner-content">
          <h4 className="banner-subtitle">Our Claim</h4>
          <h1 className="banner-title">
            Something Big Is Coming to Secure Your Future!
          </h1>
          <p className="banner-description">
            We're launching soon – stay tuned for smarter, simpler insurance with PolicyMandi.
          </p>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <IoMdHappy className="card-icon" />
          <h3 className="card-title">3.3K+</h3>
          <p className="card-text">Happy Customers</p>
        </div>
        <div className="card">
          <RiServiceFill className="card-icon" />
          <h3 className="card-title">2.4K</h3>
          <p className="card-text">Our Service Rating</p>
        </div>
        <div className="card">
          <AiFillCustomerService className="card-icon" />
          <h3 className="card-title">50+</h3>
          <p className="card-text">Loan Advisor accross india</p>
        </div>
      </div>
    </section>
  )
}

export default Bannersection
