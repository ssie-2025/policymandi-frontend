import React from 'react'
import './InsuranceType.css'
import { Link } from 'react-router-dom';

function InsuranceType() {
  const policies = [
    { name: "Health Protect", location: "India", type: "Health Insurance", link: "/health-insurance" },
    { name: "Life Secure", location: "India", type: "Life Insurance", link: "/life-insurance" },
    { name: "Motor Shield", location: "India", type: "Car Insurance", link: "/motor-insurance" },
    { name: "Family Health", location: "India", type: "Health Insurance", link: "/health insurance" },
    { name: "Term Life Plus", location: "India", type: "Life Insurance", link: "/life-insurance" },
    { name: "AutoSecure", location: "India", type: "Motor Insurance", link: "/motor-insurance" },
  ];
  return (
    <section className="insurance-type-section">
      <div className="insurance-type-container">
        
        {/* Left Side */}
        <div className="insurance-left">
          <h4 className="small-heading">Plans Available</h4>
          <h1 className="main-heading">Best Insurance Plans for You</h1>
          <p className="description">
            Compare Health, Life, and Motor insurance policies from top 
            providers. Choose the plan that fits your needs and budget.
          </p>
          <button className="btn-primary">View All Plans →</button>
        </div>

        {/* Right Side */}
        <div className="insurance-right">
          {policies.map((policy, index) => (
            <div key={index} className="policy-card">
              <h3>{policy.name}</h3>
              <hr/>
              <p className="location">{policy.location}</p>
              <p className="type">{policy.type}</p>
              <Link className="btn-link" to={policy.link}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InsuranceType
