import React from 'react'
import './Benefithealth.css'
import ambulance from '../../../assets/HealthInsurance/ambulance.png'
import daycare from '../../../assets/HealthInsurance/daycare.png'
import hospital from '../../../assets/HealthInsurance/hospital.png'
import medical from '../../../assets/HealthInsurance/medical.png'
import tax from '../../../assets/HealthInsurance/tax-payment.png'
import Heading from '../../Heading/Heading'

function Benefithealth() {

      const services = [
    {
      title: 'Cashless Hospitalization',
      icon: ambulance,
      description: 'Get treated at 10,000+ network hospitals without paying upfront.Your insurer directly settles the bill, so you can focus on recovery, not expenses.',
    },
    {
      title: 'Pre- and Post-Hospitalization Coverage',
      icon: daycare,
      description: 'Covers medical costs incurred before admission and after discharge—like consultations, diagnostic tests, and follow-up treatments',
    },
    {
      title: 'Ambulance Cover',
      icon: hospital,
      description: 'Emergency ambulance charges are included in most plans, helping you get urgent medical attention without extra financial stress.',
    },
    {
      title: 'Tax Benefits under Section 80D',
      icon: medical,
      description: 'Save up to ₹75,000 annually on your income tax by paying premiums for self,family, and parents. Health insurance offers peace of mind and tax relief.',
    },
    
  ];
    
  return (
     <section className="benefithealth-section">
      <div className="ai-container">
        <Heading title="Benefits at Glance" subTitle="Understanding the Benefits of Health Insurance Coverage"/>

        <div className="ai-grid">
          <div className="ai-box main-box">
            <div className="ai-icon">💬</div>
            <h3>Why Health Insurance is a Must-Have in Today’s World</h3>
            <p>Discover how the right plan can shield your family from rising medical costs and offer peace of mind.</p>
          </div>

          {services.map((service, index) => (
            <div className="ai-box" key={index}>
             <marquee direction="right">   <img src={service.icon} alt="service-icon" className="ai-icon" /></marquee>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefithealth
