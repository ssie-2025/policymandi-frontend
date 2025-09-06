import React from 'react'
import './Motorcriteria.css'
import Heading from '../../Heading/Heading'

function Motorcriteria() {

  return (
    <section className="motor-criteria-section">
      <Heading title="Who Can Apply?" subTitle="Understand the Basic Requirements to Qualify for Motor Insurance with PolicyMandi"/>

      <div className="cards">
        <div class="card">
          <h4>Vehicle Type & Age</h4>
          <p>The insurance is available for private cars, two-wheelers, 
            and commercial vehicles. However, very old vehicles may be 
            subject to inspection or limited coverage.</p>
        </div>
        <div class="card">
          <h4>Valid Registration Details</h4>
          <p>Your vehicle must be legally registered with the Regional 
            Transport Office (RTO) in India. Accurate registration documents are mandatory.</p>
        </div>
        <div class="card">
          <h4>Valid Driving License</h4>
          <p>The vehicle must be driven by someone holding a valid and appropriate 
            class of driving license at the time of any incident or claim.</p>
        </div>
      </div>

      
    </section>
  )
}

export default Motorcriteria
