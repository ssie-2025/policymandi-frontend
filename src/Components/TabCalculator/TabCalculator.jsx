import React from 'react'
import './TabCalculator.css'
import { useState } from 'react'
import PremiumCalculator from '../Calculator/PremiumCalculator';
import CoverageCalculator from '../Calculator/CoverageCalculator';
import MaturityCalculator from '../Calculator/MaturityCalculator';
import '../Healthinsurance/Tab/Tab.css'
import { Link } from 'react-router-dom';
import Heading from '../Heading/Heading';

function TabCalculator() {
    const cards = [
        {
            title: "Premium Calculator",
            description: "Estimate your premium and coverage for life insurance easily.",
            button1: "Calculate",
            button2: "Learn More",
            link: '/calculator',
        },
        {
            title: "Coverage Calculator",
            description: "Find out the right health coverage and premium for you & family.",
            button1: "Calculate",
            button2: "Learn More",
            link: '/calculator'
        },
        {
            title: "Maturity Calculator",
            description: "Get premium quotes for your car or bike instantly.",
            button1: "Calculate",
            button2: "Learn More",
            link: '/calculator'
        }
    ];

    return (
        <>
        <Heading title="Insurance Calculators" subTitle="Select a calculator to estimate your premium and coverage instantly."/>
            <div className="calculator-container">
                

                <div className="card-wrapper">
                    {cards.map((card, index) => (
                        <div key={index} className="calculator-card">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <div className="buttons">
                               <Link to={card.link}> <button className="btn-primary">{card.button1}</button></Link>
                               <Link to={card.link}>  <button className="btn-secondary">{card.button2}</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TabCalculator
