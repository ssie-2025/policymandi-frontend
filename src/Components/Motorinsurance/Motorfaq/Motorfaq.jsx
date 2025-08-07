import React,{ useState } from 'react'
import './Motorfaq.css'

function Motorfaq() {
    const [openIndex, setOpenIndex] = useState(0); 
        
          const toggle = (index) => {
            setOpenIndex(openIndex === index ? null : index);
          
        };
  return (
      <section className="faq-section">
      <div className="faq-left">
        <h2>Why buy Motor Insurance <span>from Policymandi</span></h2>
        <p>
          Secure Your Family’s Future with Trusted, Hassle-Free 
          Motor Insurance from PolicyMandi
        </p>
      </div>

      <div className="faq-right">
        <div className={`faq-item ${openIndex === 0 ? 'open' : ''}`} onClick={() => toggle(0)}>
          <div className="faq-question">
            What makes PolicyMandi different for motor insurance?
            <span className="icon">{openIndex === 0 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 0 && (
            <div className="faq-answer">
             ✅ We offer unbiased comparisons from top insurers, expert advice,
              and full support from policy selection to claim settlement—all in one place.
            </div>
          )}
        </div>

        <div className={`faq-item ${openIndex === 1 ? 'open' : ''}`} onClick={() => toggle(1)}>
          <div className="faq-question">
             Can I compare multiple motor insurance plans?
            <span className="icon">{openIndex === 1 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 1 && <div className="faq-answer">
            ✅ Yes! PolicyMandi allows you to compare features, premiums,
             add-ons, and claim processes from leading motor insurers instantly.</div>}
        </div>

        <div className={`faq-item ${openIndex === 2 ? 'open' : ''}`} onClick={() => toggle(2)}>
          <div className="faq-question">
             Does PolicyMandi charge extra for its services?
            <span className="icon">{openIndex === 2 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 2 &&
           <div className="faq-answer">✅ No, our services are absolutely free. You pay only 
           the premium shown by the insurance provider—no hidden charges.</div>}
        </div>

        <div className={`faq-item ${openIndex === 3 ? 'open' : ''}`} onClick={() => toggle(3)}>
          <div className="faq-question">
            Will I get help during the claim process?
            <span className="icon">{openIndex === 3 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 3 && <div className="faq-answer">
            ✅ Absolutely. Our support team assists you throughout the claim process, 
            ensuring smooth and hassle-free settlements.</div>}
        </div>

        <div className={`faq-item ${openIndex === 4 ? 'open' : ''}`} onClick={() => toggle(4)}>
          <div className="faq-question">
             Can I renew my motor insurance through PolicyMandi?
            <span className="icon">{openIndex === 4 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 4 && <div className="faq-answer">
           ✅  Yes, we offer quick and easy policy renewal with reminders, updated quotes, and no paperwork.</div>}
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

export default Motorfaq
