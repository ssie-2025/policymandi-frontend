import React, {useState} from 'react'

function Faqhealth() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      
    };

  return (
     <section className="faq-section">
      <div className="faq-left">
        <h2>Why buy Health Insurance <span>from Policymandi</span></h2>
        <p>
          Secure Your Family’s Future with Trusted, Hassle-Free 
          Health Insurance from PolicyMandi
        </p>
      </div>

      <div className="faq-right">
        <div className={`faq-item ${openIndex === 0 ? 'open' : ''}`} onClick={() => toggle(0)}>
          <div className="faq-question">
            What makes PolicyMandi different from other insurance platforms?
            <span className="icon">{openIndex === 0 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 0 && (
            <div className="faq-answer">
             ✅ PolicyMandi offers a wide range of carefully curated 
             health plans with transparent pricing, expert guidance, and
              zero hidden charges.
            </div>
          )}
        </div>

        <div className={`faq-item ${openIndex === 1 ? 'open' : ''}`} onClick={() => toggle(1)}>
          <div className="faq-question">
             Do you compare plans from multiple insurers?
            <span className="icon">{openIndex === 1 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 1 && <div className="faq-answer">
            ✅ Yes. We compare policies from top-rated insurance providers 
            to help you choose the best health plan that suits your needs and budget.</div>}
        </div>

        <div className={`faq-item ${openIndex === 2 ? 'open' : ''}`} onClick={() => toggle(2)}>
          <div className="faq-question">
             Can I get assistance during the claim process?
            <span className="icon">{openIndex === 2 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 2 &&
           <div className="faq-answer">✅ Absolutely! Our support team assists you through every step
            of the claim process—whether cashless or reimbursement.</div>}
        </div>

        <div className={`faq-item ${openIndex === 3 ? 'open' : ''}`} onClick={() => toggle(3)}>
          <div className="faq-question">
            Is PolicyMandi a certified platform?
            <span className="icon">{openIndex === 3 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 3 && <div className="faq-answer">
            ✅ Yes, PolicyMandi works only with IRDAI-approved insurers and ensures
             all policies offered are compliant and trustworthy.</div>}
        </div>

        <div className={`faq-item ${openIndex === 4 ? 'open' : ''}`} onClick={() => toggle(4)}>
          <div className="faq-question">
            Will I get personalized plan recommendations?
            <span className="icon">{openIndex === 4 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 4 && <div className="faq-answer">
           ✅ Yes, based on your age, health needs, and budget, we suggest tailored plans
            to make sure you get the right coverage.</div>}
        </div>

         <div className={`faq-item ${openIndex === 5 ? 'open' : ''}`} onClick={() => toggle(5)}>
          <div className="faq-question">
            Are there any additional fees for using PolicyMandi?
            <span className="icon">{openIndex === 5 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 5 && <div className="faq-answer">
          ✅ No. Our services are completely free. You pay only for the policy 
          premium—nothing extra.</div>}
        </div>
      </div>
    </section>
  
  )
}

export default Faqhealth
