import React from 'react'
import './Claimsettlement.css'

const services = [
  {
    title: 'Notify the Insurer',
    description: 'The nominee must inform the insurance company about the policyholder’s death as soon as possible. This can be done online, through customer care, or by visiting a branch.',
    icon: '🧾',
  },
  {
    title: 'Submit Required Documents',
    description: 'To process a claim, the nominee needs to submit essential documents like the claim form, death certificate, policy document, ID proof, and bank details. Additional documents may be required based on the case.',
    icon: '📑',
  },
  {
    title: 'Claim Review & Settlement',
    description: 'After receiving the documents, the insurer verifies the claim. Simple claims are usually settled within 7 to 15 working days, while complex cases may take up to 90 days as per IRDAI guidelines.',
    icon: '⏱️',
  },
];

function Claimsettlement() {
  return (
        <section className="claim-section">
      <div className="claim-content">
        <p className="small-heading">Claim Process</p>
        <h2 className="main-heading">Fast, Transparent & Supportive <br />Claim Assistance</h2>

        <div className="claim-cards">
          {services.map((service, idx) => (
            <div className="claim-card" key={idx}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Claimsettlement
