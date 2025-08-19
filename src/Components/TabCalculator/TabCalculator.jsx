import React from 'react'
import './TabCalculator.css'
import { useState } from 'react'
import PremiumCalculator from '../Calculator/PremiumCalculator';
import CoverageCalculator from '../Calculator/CoverageCalculator';
import MaturityCalculator from '../Calculator/MaturityCalculator';
import '../Healthinsurance/Tab/Tab.css'

function TabCalculator() {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }
    return (
        <>
            <div className="tab-container">
                <div className="tab-header">
                    <button
                        className={activeTab === "tab1" ? "active Tab" : "tab"}
                        onClick={() => handleTabClick("tab1")} >
                        Premium Calculator
                    </button>
                    <button
                        className={activeTab === "tab2" ? "active tab" : "tab"}
                        onClick={() => handleTabClick("tab2")}>
                        Coverage Calculator
                    </button>
                    <button
                        className={activeTab === "tab3" ? "active tab" : "tab"}
                        onClick={() => handleTabClick("tab3")}>

                        Maturity Calculator
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === "tab1" && (
                        <PremiumCalculator />
                    )}
                    {activeTab === "tab2" && (
                        <CoverageCalculator />
                    )}
                    {activeTab === "tab3" && (
                        <MaturityCalculator />
                    )}
                </div>
            </div>
        </>
    )
}

export default TabCalculator
