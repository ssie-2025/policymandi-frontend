import React from 'react'
import './Motorcomparison.css'

const inclusions = [
    "Accidental damage to your vehicle",
    "Theft or burglary of the insured vehicle",
    "Fire or explosion damage",
    "Natural calamities like floods, earthquakes, or cyclones",
    "Man-made disasters like riots or vandalism",
    "Third-party liability (injury, death, or property damage)",
    "Towing charges after an accident (up to specified limit)",
    "Personal accident cover for the owner-driver",
]
const exclusions = [
    "Drunk driving or drug influence at the time of accident",
    "Driving without a valid license",
    "Mechanical or electrical breakdowns",
    "Regular wear and tear or depreciation",
    "Using the vehicle for illegal activities",
    "Damage due to war or nuclear risks",
    "Claims after policy expiry",
    "Unauthorized usage (e.g., using a private car for commercial use)",
]

function MotorComparison() {
  return (
    <section className="comparison-section">
        <h2>Inclusion & <span> Exclusion</span> in Motor Insurance</h2>
        <div className="motor-card-container">
            <div className="card do-card">
                <h3>Inclusion</h3>
                <ul>
                    {inclusions.map((item, index) => (
                        <li key={index}>
                            <span className="checkmark">✔</span>{item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="card dont-card">
                    <h3>Exclusion</h3>
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

export default MotorComparison
