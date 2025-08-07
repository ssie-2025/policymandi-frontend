import React from 'react'
import './Lifeinsurancebenefit.css'
import loan from '../../../assets/lifeinsurance/Loan.png'
import claim from '../../../assets/lifeinsurance/cliam.png'
import emergency from '../../../assets/lifeinsurance/emergency.png'
import protection from '../../../assets/lifeinsurance/protection.png'
import tax from '../../../assets/lifeinsurance/tax.png'
import wealth from '../../../assets/lifeinsurance/wealth.png'
import secure from '../../../assets/lifeinsurance/secure.png'
import customize from '../../../assets/lifeinsurance/customize.png'


const taxServices = [
  {
    image: loan,
    title: "Family Protection",
    description: "Payout ensures loved ones stay financially stable",
  },
  {
    image: claim,
    title: "Loan coverage",
    description: "Prevent burden of unpaid loans",
  },
  {
    image: emergency,
    title: "Wealth planning",
    description: "ULIPs/Endowment help build corpus",
  },
  {
    image: protection,
    title: "Tax saving",
    description: "Save tax under 80C, 10(10D)",
  },
  {
    image:  tax,
    title: "Easy claim process",
    description: "Hassle-free support with Policy Mandi",
  },
  {
    image: wealth,
    title: "Emergency Fund",
    description: "Life insurance can serve as a backup fund during critical times",
  },
  {
   image: secure,
   title: "Secure Data Handling",
   description: "Your data is secure with encryption and privacy protection." 
  },
  {
    image: customize,
    title: "Customized Policy Recommendations",
    description: "Get personalized policy suggestions tailored to you."
  }
];

function Lifeinsurancebenefit() {

  return (
    <section className="tax-solutions-section">
      <h2 className="tax-heading">Life Insurance Benefits at a Glance</h2>
      <div className="tax-grid">
        {taxServices.map((service, index) => (
          <div
            key={index}
            className={`tax-card ${service.featured ? "featured" : ""}`}
          >
            <div className="card-icon"><img src={service.image} alt="" /></div>
            
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link} className="read-more">
              Read More →
            </a>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="view-more">View More Services</button>
      </div>
    </section>
  )
}

export default Lifeinsurancebenefit

