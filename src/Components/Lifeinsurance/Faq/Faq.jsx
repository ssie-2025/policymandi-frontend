import React, { useState } from 'react'
import "./Faq.css"

function Faq() {
    const [openIndex, setOpenIndex] = useState(0); 
    
      const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      
    };
  return (
    <section className="faq-section">
      <div className="faq-left">
        <h2>Why buy Life Insurance <span>from Policymandi</span></h2>
        <p>
          Secure Your Family’s Future with Trusted, Hassle-Free 
          Life Insurance from PolicyMandi
        </p>
      </div>

      <div className="faq-right">
        <div className={`faq-item ${openIndex === 0 ? 'open' : ''}`} onClick={() => toggle(0)}>
          <div className="faq-question">
            Why should I buy life insurance?
            <span className="icon">{openIndex === 0 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 0 && (
            <div className="faq-answer">
             ✅ Life insurance provides financial protection to your loved 
             ones in case something happens to you. It ensures your family 
             can handle expenses, repay debts, and maintain their lifestyle.
            </div>
          )}
        </div>

        <div className={`faq-item ${openIndex === 1 ? 'open' : ''}`} onClick={() => toggle(1)}>
          <div className="faq-question">
             Is life insurance necessary if I'm young and healthy?
            <span className="icon">{openIndex === 1 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 1 && <div className="faq-answer">
            ✅ Yes! Buying early means lower premiums. Plus, life is unpredictable—starting young helps secure your future affordably.</div>}
        </div>

        <div className={`faq-item ${openIndex === 2 ? 'open' : ''}`} onClick={() => toggle(2)}>
          <div className="faq-question">
            What if I already have savings?
            <span className="icon">{openIndex === 2 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 2 &&
           <div className="faq-answer">✅ Savings may not be enough. Life insurance ensures
            guaranteed financial support even if your savings fall short during emergencies 
            or after your demise.</div>}
        </div>

        <div className={`faq-item ${openIndex === 3 ? 'open' : ''}`} onClick={() => toggle(3)}>
          <div className="faq-question">
            Can life insurance help with loans or debts?
            <span className="icon">{openIndex === 3 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 3 && <div className="faq-answer">
            ✅ Absolutely. The payout can be used to settle home loans, 
            personal loans, or credit card debts—so your family doesn’t
             carry the burden.</div>}
        </div>

        <div className={`faq-item ${openIndex === 4 ? 'open' : ''}`} onClick={() => toggle(4)}>
          <div className="faq-question">
            Does life insurance offer tax benefits?
            <span className="icon">{openIndex === 4 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 4 && <div className="faq-answer">
           ✅ Yes. Premiums are eligible for deductions under Section 80C, 
           and the maturity/death benefits are tax-free under Section 10(10D).</div>}
        </div>

         <div className={`faq-item ${openIndex === 5 ? 'open' : ''}`} onClick={() => toggle(5)}>
          <div className="faq-question">
            What type of life insurance is best?
            <span className="icon">{openIndex === 5 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 5 && <div className="faq-answer">
          ✅ Term life is affordable and provides high coverage. 
          Endowment and ULIP plans combine protection with savings
           or investment options.</div>}
        </div>
      </div>
    </section>
  )
}

export default Faq
