import React, { useState } from 'react'
import './Tab.css'

function Tab() {
  const [activeTab, setActiveTab] = useState("tab2");

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
              1. Inform the TPA (Third Party Administrator) at the hospital helpdesk.<br />
              2. Submit your e-card and valid ID proof.<br />
              3. The hospital will send a pre-authorization request to the insurer.<br />
              4. Once approved, your treatment begins.<br />
              5. On discharge, the insurer settles the bill directly with the hospital.<br />
            </p>
            <h3> Reimbursement Claim (Non-network Hospitals)</h3>
            <p>
              1. Pay the bills out-of-pocket at the hospital.<br />
              2. Collect all documents (bills, prescriptions, reports, discharge summary).<br />
              3. Submit a claim form with all supporting documents to the insurer.<br />
              4. The insurer verifies and reimburses the approved amount to your bank account.<br />
            </p>
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <h3>Required Documents for Health Insurance Claims</h3>

            <p>When filing a health insurance claim, you will need to submit certain documents to ensure a smooth
              and hassle-free process. Below is the list of commonly required documents:<br/>

              <b>1. Claim Form (Filled and Signed):</b><br/>
              A duly completed claim form provided by your insurance company, signed by the
              policyholder or claimant, is the first and most important requirement.<br/>

              <b>2. Hospital Bills and Payment Receipts:</b><br/>
              Original hospital invoices, treatment bills, consultation charges, and
              payment receipts serve as proof of the medical expenses you’ve incurred.<br/>

              <b>3. Doctor’s Prescription and Medical Reports:</b><br/>
              These include prescriptions, diagnostic test reports, investigation results,
              and any other medical records that support the treatment provided.<br/>

             <b> 4.Discharge Summary:</b><br/>
              The hospital discharge summary provides details of the patient’s admission,
              treatment received, and the condition at the time of discharge.<br/>

              <b>5.Copy of ID and Insurance Policy Card:</b><br/>
              A government-issued ID (such as Aadhaar, PAN, or Passport) along with your
              health insurance card or policy document is required to verify your identity
              and policy details.<br/>

              <b>6.Bank Details for Reimbursement (If Applicable):</b><br/>
              For reimbursement claims, you must provide your bank account details, cancelled cheque,
              or passbook copy so that the approved claim amount can be transferred directly.<br/>
            </p>
          </div>
        )}
        {activeTab === "tab3" && (
          <div>
            <h3>Claim Settlement Timelines</h3>
            <p>
              Understanding how long it takes for an insurance claim to be processed is important, as it helps policyholders plan their finances during medical emergencies. Below are the typical timelines for different types of health insurance claims:<br/>

              <b>Cashless Claims (Hospital Network Claims):</b> <br/>
              When you opt for cashless treatment at a network hospital, the insurance company directly settles the bills with the hospital. In most cases, such claims are processed quickly—usually within 24 to 48 hours of receiving the pre-authorization or request from the hospital. This ensures that you or your family don’t have to worry about arranging large sums of money during treatment.<br/>

              <b>Reimbursement Claims:</b><br/>
              In situations where you pay the hospital bills upfront and then apply for reimbursement, the insurance company requires time to verify all documents and medical expenses. Typically, reimbursement claims are settled within 7 to 15 working days, provided all the required documents are submitted correctly.<br/>

              <b>Complex or Special Cases (As per IRDAI Guidelines):</b><br/>
              Sometimes, claims may involve complicated medical histories, additional investigations, or policy-specific clarifications. According to the Insurance Regulatory and Development Authority of India (IRDAI) guidelines, such claims may take longer to resolve and can extend up to 30 to 90 days in rare cases.<br/>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tab
