import React from 'react'
import './Whatweserve.css'

function Whatweserve() {
    const services = [
  {
    tag: 'Protect What Matters Most',
    title: 'Life Insurance',
    description: "Life insurance is a smart financial tool that ensures your loved ones are financially protected in case of unforeseen events. Whether it's covering future expenses, outstanding loans, or long-term goals, a life insurance policy offers peace of mind and stability when it matters most.",
  },
  {
    tag: 'Drive Safe. Stay Covered',
    title: 'Motor Insurance',
    description: "Motor insurance provides financial protection against damages or loss to your vehicle due to accidents, theft, fire, or natural disasters. It also covers third-party liability, ensuring legal compliance and peace of mind while driving.",
  },
  {
    tag: 'Your Health. Our Priority.',
    title: 'Health Insurance',
    description: "Health insurance provides financial protection against medical expenses arising from illness, injury, hospitalization, or surgery. It ensures you get quality treatment without worrying about high healthcare costs.",
  },
  {
    tag: 'Travel Far. Stay Protected',
    title: 'Travel Insurance',
    description: "Travel insurance offers financial protection against unexpected events such as trip cancellations, medical emergencies, lost baggage, flight delays, and more. It ensures a stress-free journey—whether you're traveling domestically or abroad.",
  },
];
  return (
     <section className="what-section">
      <div className="what-header">
        <h4 className="what-subtitle">What We Serve</h4>
        <h2 className="what-title">Insurance for Every Need</h2>
      </div>

      <div className="what-slider">
        {services.map((item, index) => (
          <div className="what-card" key={index}>
            <span className="what-tag">{item.tag}</span>
            <h3 className="what-card-title">{item.title}</h3>
            <p className="what-card-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Whatweserve
