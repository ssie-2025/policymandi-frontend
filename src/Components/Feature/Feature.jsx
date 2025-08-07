import React from 'react'
import './Feature.css'
import { GrUserExpert,  } from "react-icons/gr";
import { IoMdGitCompare } from "react-icons/io";
import { FaFastBackward } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { GrSupport } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";

function Feature() {
    const features = [
        {
            icon: <GrUserExpert />,
            title: "Expert Guidence",
            description: "Our team of certified insurance advisors helps you choose the right policy based on your needs—not on commissions. We explain every clause in easy language."
        },
        {
            icon: <IoMdGitCompare />,
            title: "Compare Before You Buy",
            description: "We bring policies from top insurers to one place. Easily compare premiums, benefits, claim settlement ratios, and hidden charges—side by side.",
        },
        {
            icon: <FaFastBackward />,
            title: "Fast & Paperless Process",
            description: "Buy or renew your policy online in minutes. No long forms, no middlemen, no delays."
        },
        {
            icon: <RiServiceFill />,
            title: "Zero Hidden Costs",
            description: "No service fees. No extra charges. We earn only from insurers—not from your pocket. What you see is what you get."
        },
        {
            icon: <GrSupport />,
            title: "Claim Support That Cares",
            description: "We stay with you even after you buy. In case of a claim, our support team helps you file and track it—until it’s settled."
        },
        {
            icon: <RiSecurePaymentLine />,
            title: "100% Transparent & Secure",
            description: "Your data is encrypted and your privacy is our priority. We follow strict security protocols and IRDAI guidelines."
        },
    ]
  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#" className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </section>
    
  )
}

export default Feature
