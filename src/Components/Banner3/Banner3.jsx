import React from 'react'
import './Banner3.css'
import heroImg from '../../assets/heroImg.png'

function Banner3() {
  return (
    <section className="banner3-hero">
      <div className="hero-content">
        <h4 className="small-heading">Your Policy, Your Choice</h4>
        <h1 className="main-heading">Your Policy, Your Choice</h1>
        <p className="description">
          Find the best insurance plans for Health, Life, and Motor in just a few clicks.
          Compare policies from top insurers and secure your future today.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="search-input"
          />
          <select className="search-select">
            <option value="">Location</option>
            <option value="india">Delhi</option>
            <option value="usa">Lucknow</option>
            <option value="uk">Banglore</option>
          </select>
          <button className="search-btn">Get Insurance</button>
        </div>

        <p className="popular">
          Family Health Cover, Term Life Insurance, Car Insurance
        </p>


      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Work with laptop" />
      </div>
    </section>
  )
}

export default Banner3
