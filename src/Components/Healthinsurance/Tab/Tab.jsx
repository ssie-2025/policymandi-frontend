import React, { useState } from 'react'
import './Tab.css'

function Tab() {
const [activeTab, setActiveTab] = useState("tab1");

const handleTabClick = (tab) => {
    setActiveTab(tab);
}

  return (
    <div className="tab-container">
      <div className="tab-header">
        <button
          className={activeTab === "tab1" ? "tab active" : "tab"}
          onClick={() => handleTabClick("tab1")}
        >
          Cashless Claim
        </button>
        <button
          className={activeTab === "tab2" ? "tab active" : "tab"}
          onClick={() => handleTabClick("tab2")}
        >
          Required Documents
        </button>
        <button
          className={activeTab === "tab3" ? "tab active" : "tab"}
          onClick={() => handleTabClick("tab3")}
        >
          Claim Settlement Timelines
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "tab1" && (
          <div>
            <h3>Cashless Claim (at Network Hospitals)</h3>
            <p>
              1. Inform the TPA (Third Party Administrator) at the hospital helpdesk.<br/>
              2. Submit your e-card and valid ID proof.<br/>
              3. The hospital will send a pre-authorization request to the insurer.<br/>
              4. Once approved, your treatment begins.<br/>
              5. On discharge, the insurer settles the bill directly with the hospital.<br/>
            </p>
            <h3> Reimbursement Claim (Non-network Hospitals)</h3>
            <p>
                1. Pay the bills out-of-pocket at the hospital.<br/>
                2. Collect all documents (bills, prescriptions, reports, discharge summary).<br/>
                3. Submit a claim form with all supporting documents to the insurer.<br/>
                4. The insurer verifies and reimburses the approved amount to your bank account.<br/>
            </p>
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <h3>Required Documents</h3>
            <p>
                1. Claim form (filled and signed)<br/>
                2. Hospital bills & payment receipts<br/>
                3. Doctor’s prescription & medical reports<br/>
                4. Discharge summary<br/>
                5. Copy of ID and insurance policy card<br/>
                6. Bank details for reimbursement (if applicable)<br/>
            </p>
          </div>
        )}
        {activeTab === "tab3" && (
          <div>
            <h3>Claim Settlement Timelines</h3>
            <p>
                1. Cashless claims: Processed within 24 to 48 hours of receiving the request<br/>
                2. Reimbursement claims: Settled within 7 to 15 working days<br/>
                3. As per IRDAI guidelines, complex claims may take up to 30 to 90 days<br/>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tab
