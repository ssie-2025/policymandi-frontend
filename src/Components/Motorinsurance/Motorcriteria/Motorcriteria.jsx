import React from 'react'
import './Motorcriteria.css'

function Motorcriteria() {
  // const data = [
  //   {
  //     title: "Vehicle Type & Age",
  //     desc: "The insurance is available for private cars, two-wheelers, and commercial vehicles. However, very old vehicles may be subject to inspection or limited coverage.",
  //     color: "#003049",
  //   },
  //   {
  //     title: "Valid Registration Details",
  //     desc: "Your vehicle must be legally registered with the Regional Transport Office (RTO) in India. Accurate registration documents are mandatory.",
  //     color: "#d62828",
  //   },
  //   {
  //     title: "Valid Driving License",
  //     desc: "The vehicle must be driven by someone holding a valid and appropriate class of driving license at the time of any incident or claim.",
  //     color: "#f77f00",
  //   },
  // ]
  return (
    <section className="criteria-section">
      <h2>Who Can Apply?</h2>
      <p>Understand the Basic Requirements to Qualify for Motor Insurance with PolicyMandi</p>

      <div className="cards">
        <div class="card">
          <h3>Vehicle Type & Age</h3>
          <p>The insurance is available for private cars, two-wheelers, 
            and commercial vehicles. However, very old vehicles may be 
            subject to inspection or limited coverage.</p>
        </div>
        <div class="card">
          <h3>Valid Registration Details</h3>
          <p>Your vehicle must be legally registered with the Regional 
            Transport Office (RTO) in India. Accurate registration documents are mandatory.</p>
        </div>
        <div class="card">
          <h3>Valid Driving License</h3>
          <p>The vehicle must be driven by someone holding a valid and appropriate 
            class of driving license at the time of any incident or claim.</p>
        </div>
      </div>

      {/* <div className="criteria-services-container">
        {data.map((service, index) => (
          <div
            className="criteria-service-card"
            key={index}
            style={{ backgroundColor: service.color }}
          >
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
            <a href="#">LEARN MORE</a>
          </div>
        ))}
      </div>
      <button className="criteria-button">Contact Us</button> */}
    </section>
  )
}

export default Motorcriteria
