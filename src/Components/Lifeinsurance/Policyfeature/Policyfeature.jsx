import React from 'react'
import './Policyfeature.css'

function Policyfeature() {
    return (
        <section className="Policyfeature-section">
            <div className="service-header">
                <h2>Policy Features</h2>
                <p>
                    Every life insurance policy comes with key features that define
                    how it protects you and your family. From the coverage amount
                    that secures your loved ones' future, to the policy term that
                    fits your financial goals, each feature plays an important role.
                </p>
                <button className="learn-more">
                    More about service <span>→</span>
                </button>
            </div>
            <div className="services-grid">
                <div className="service-card">
                    <h3>📌 Coverage Amount</h3>
                    <p>The sum assured is the fixed amount your family will receive
                        in case of your unfortunate demise during the policy term.
                        Choosing the right coverage helps secure their financial future.</p>
                </div>
                <div className="service-card">
                    <h3>🕒 Policy Term</h3>
                    <p>This refers to how long your life insurance policy will remain
                        active. You can choose short-term or long-term plans based on
                        your needs—some policies even offer lifetime coverage.</p>
                </div>
                <div className="service-card">
                    <h3>💰 Premium Payment Options</h3>
                    <p>Enjoy flexible premium payment options. Choose to pay monthly,
                        quarterly, yearly, or as a one-time (single) premium, depending
                        on your budget and convenience.</p>
                </div>
                <div className="service-card">
                    <h3>➕ Riders </h3>
                    <p>Riders are optional add-ons that enhance your life insurance coverage.
                        Popular riders include Critical Illness Cover, Accidental Death Benefit,
                        and Waiver of Premium. These provide extra financial protection against
                        unforeseen events for a small additional cost.</p>
                </div>
            </div>
        </section>

    )
}

export default Policyfeature
