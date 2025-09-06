import React from 'react'
import './Healthpolicy.css'
import img1 from '../../../assets/HealthInsurance/img1.jpg'
import img2 from '../../../assets/HealthInsurance/img2.jpg'
import img3 from '../../../assets/HealthInsurance/img3.jpeg'
import img4 from '../../../assets/HealthInsurance/img4.webp'
import img5 from '../../../assets/HealthInsurance/img5.webp'
import Flipcard from '../Flipcard/Flipcard'
import Heading from '../../Heading/Heading'

function Healthpolicy() {
    return (
        <section className="projects-section">
           <Heading title="All the essentials, simplified" subTitle="Know the key elements of your insurance plan" />

      <div className="projects-grid">
        <Flipcard
          imageSrc={img1}
          title="Sum Insured (Coverage Amount)"
          description="The total amount your insurer will pay in case of a claim. Choose a sum insured that matches your medical needs and lifestyle to ensure full protection without out-of-pocket costs."
        />
        <Flipcard
          imageSrc={img2}
          title="Network Hospitals for Cashless Claims"
          description="Enjoy hassle-free treatment at a wide range of partnered hospitals across India. With cashless claims, your insurer directly settles the bill—no paperwork, no stress."
        />
        <Flipcard
          imageSrc={img3}
          title="Co-Pay & Deductible Terms"
          description="Some plans may require you to pay a portion of the medical bill (co-pay) or a fixed amount before the insurance kicks in (deductible). Knowing these terms helps avoid surprises at claim time."
        />
        <Flipcard
          imageSrc={img4}
          title="Renewal Benefits (No-Claim Bonus)"
          description="Get rewarded for staying healthy. If you don’t make any claims during the policy year, your coverage amount may increase without an increase in premium."
        />
      </div>
    </section>
    )
}

export default Healthpolicy
