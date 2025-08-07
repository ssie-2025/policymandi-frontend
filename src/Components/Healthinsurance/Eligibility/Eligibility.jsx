import React from 'react'
import './Eligibility.css'

const cards = [
    {
      title: "Eligibility Criteria",
      description:
        "Getting health insurance through PolicyMandi is simple, but certain basic eligibility rules apply. ",
      icon: "🛡️",
      highlighted: true,
    },
    {
      title: "Age Limits",
      description:
        "Health insurance is generally available for adults aged 18 to 65 years and children from 90 days to 25 years as dependents. Many plans also offer lifelong renewability, ensuring continued protection as you age.",
      icon: "👥",
      highlighted: false,
    },
    {
      title: "Medical History",
      description:
        "You may need to disclose any existing health issues, surgeries, or lifestyle habits. A medical checkup could be required depending on your age or chosen coverage.",
      icon: "🩺",
      highlighted: false,
    },
    {
      title: "Waiting Period for Pre-Existing Diseases",
      description:
        "Your medical history and lifestyle habits, like smoking, can impact your health insurance. Some plans may ask for a checkup before approval.",
      icon: "🕐",
      highlighted: false,
    },
  ];

function Eligibility() {
  return (
   <div className="why-section">
      <div className="why-container">
        {cards.map((card, index) => (
          <div
            className={`why-card ${card.highlighted ? "highlight" : ""}`}
            key={index}
          >
            <div className="why-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Eligibility
