import React from 'react'
import './Motortype.css'
import icon1 from '../../../assets/motoinsurance/icon1.png'
import icon2 from '../../../assets/motoinsurance/icon2.png'
import icon3 from '../../../assets/motoinsurance/icon3.png'
import icon4 from '../../../assets/motoinsurance/icon4.png'
import video from '../../../assets/video.mp4'

function Motortype() {
    const services = [
        {
            icon: icon3,
            title: "Third-Party Liability",
            desc: "This is the mandatory insurance as per Indian law. It covers damages or injuries caused to another person, vehicle, or property in an accident. However, it does not cover your own vehicle's damage.",
        },
        {
            icon: icon2,
            title: "Comprehensive Insurance",
            desc: "A complete protection plan that includes both third-party liabilities and own-damage cover. It also protects against theft, natural disasters, fire, vandalism, and more—making it ideal for full peace of mind.",
        },
        {
            icon: icon1,
            title: "Own Damage Cover",
            desc: "Available for vehicles already covered under third-party insurance. This policy covers only the damage to your own vehicle due to accidents, theft, fire, or natural calamities.",
        },
        {
            icon: icon4,
            title: "Add-On Covers",
            desc: "Add-on covers like Zero Depreciation, Roadside Assistance, and Engine Protection boost your motor insurance by offering extra coverage beyond the basic plan.",
        },
    ]
    return (
        <section className="motor-services-section">
            <div className="motor-services-header">
                <h2 className='text-clip'>Motor Insurance Plans for Every Drive</h2>
                <p>From third-party cover to full protection—find a plan tailored to your needs.</p>
            </div>
            <div className="motor-services-grid">
                {services.map((service, index) => (
                    <div key={index} className="motor-service-card">
                        <img src={service.icon} alt="icon" className="motor-service-icon" />
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Motortype
