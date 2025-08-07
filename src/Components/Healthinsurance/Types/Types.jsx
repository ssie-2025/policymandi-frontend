import React from 'react'
import './Types.css'
import individual from '../../../assets/HealthInsurance/individual.png'
import family from '../../../assets/HealthInsurance/family.png'
import critical from '../../../assets/HealthInsurance/critical.png'
import citizen from '../../../assets/HealthInsurance/citizen.png'

const services = [
  {
    icon: individual,
    title: 'Individual Health Insurance',
    desc: 'Covers a single person for medical expenses such as hospitalization, treatments, and surgeries. Ideal for young professionals or individuals seeking personal protection.',
  },
  {
    icon: family,
    title: 'Family Floater Plan',
    desc: 'One comprehensive policy that covers your entire family under a single sum insured. Affordable and convenient for families who want shared coverage for spouses, children, or parents.',
  },
  {
    icon: citizen,
    title: 'Senior Citizen Health Plan',
    desc: 'Specially designed for individuals aged 60 and above. Includes higher coverage for age-related ailments, dedicated support, and coverage for pre-existing conditions (after waiting periods).',
  },
  {
    icon: critical,
    title: 'Critical Illness Plan',
    desc: 'Offers a lump sum payout on diagnosis of serious illnesses like cancer, heart disease, or stroke. Useful for managing high treatment costs and financial stability during recovery.',
  },
];

function Types() {
  return (
     <section className="type-section">
      <div className="type-container">
        <div className="type-header">
          <h2>🩺 Types of Health Insurance Plans</h2>
          <p className="description">
            At PolicyMandi, we help you choose from a wide range of health
            insurance plans tailored to your unique needs. Here's a quick
            overview of the most popular types:
          </p>
        </div>

        <div className="type-cards">
          {services.map((service, index) => (
            <div key={index} className="type-card">
                <img src={service.icon} alt="" className="icon" height={50} width={50} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Types
