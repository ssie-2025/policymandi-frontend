import React from 'react'
import './Eligibility.css'
import Heading from '../../Heading/Heading';


const steps = [
  {
    title: "Age Range",
    description:
      "Life insurance is typically available for individuals aged 18 to 65 years, with coverage lasting up to 75 or 85 years depending on the plan. Starting early helps you enjoy lower premiums and longer coverage.",
    
  },
  {
    title: "Health Requirements",
    description:
      "Life insurance providers may require a health declaration and sometimes a medical exam, depending on your age and coverage. Healthy individuals often get faster approvals and lower premiums.",
 
  },
  {
    title: "Occupation (If Applicable)",
    description: "Your occupation affects your life insurance premium. Low-risk jobs face no issues, while high-risk professions may lead to higher premiums or special conditions.",
    
  },
];


function Eligibility() {
    return (
        <section className="working-process-section">
      <div className="working-process-container">
        <Heading title="Eligibility Criteria" subTitle="Who Can Apply? Understanding the Eligibility Criteria for Life Insurance"/>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}

export default Eligibility
