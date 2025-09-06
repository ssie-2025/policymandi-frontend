import React from 'react'
import './Comparison.css'
import Heading from '../../Heading/Heading'

const inclusions = [
  "Hospitalization expenses (pre- and post-hospital care)",
  "Daycare procedures that don’t require 24-hour admission",
  "Surgeries and treatments (as per policy terms)",
  "Ambulance charges",
  "Maternity and newborn cover (available in select plans)",
  "Critical illness benefits (if added as a rider)",
]
const exclusions = [
  "Cosmetic or aesthetic procedures",
  "Pre-existing conditions (until the waiting period is over)",
  "Self-inflicted injuries or substance abuse-related treatments",
  "Alternative therapies not approved by the policy",
  "Non-medical expenses like admission fees, toiletries, etc.",
]

function Comparison() {

  return (
    <section className="comparison-section">
        <Heading title="Inclusion & Exclusion" subTitle="Know the Limits: Inclusions and Exclusions in Health Insurance"/>
        <div className="motor-card-container">
            <div className="card do-card">
                <h3>What's Cover</h3>
                <ul>
                    {inclusions.map((item, index) => (
                        <li key={index}>
                            <span className="checkmark">✔</span>{item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="card dont-card">
                    <h3>What's not cover</h3>
                    <ul>
                        {exclusions.map((item,index) => (
                            <li key={index}>
                                <span className='cross'>✘</span>{item}
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    </section>
  )
}

export default Comparison
