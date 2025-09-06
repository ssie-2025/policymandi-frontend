import React, { useState } from 'react'
import './FaqSection.css'
import left_img from '../../assets/family-img.jpg'
import Heading from '../Heading/Heading';


function FaqSection() {
   const [openIndex, setOpenIndex] = useState("false");

   const toggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
   }
  return (
    <section className="faq-container">
      <div className="faq-left">
        <Heading title="FAQ Section" subTitle="Choose a plan that fits your plan needs and budget."/>
        {/* <h2>Frequently asked questions</span></h2>
        <p className='faq-desc'>
          Choose a plan that fits your plan needs and budget. No hidden fees,
          no surprises—just straightforward pricing for powerful plan management.
        </p> */}
      </div>

      <div className="faq-list">
        <div className={`faq-item ${openIndex === 0 ? 'open' : ''}`} onClick={() => toggle(0)}>
          <div className="faq-question">
            What is PolicyMandi?
            <span className="icon">{openIndex === 0 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 0 && (
            <div className="faq-answer">
              PolicyMandi is a one-stop platform where you can compare,
               choose, and buy various types of insurance policies like Health,
                Life, Motor, and Travel Insurance — all tailored to your needs.
            </div>
          )}
        </div>

        <div className={`faq-item ${openIndex === 1 ? 'open' : ''}`} onClick={() => toggle(1)}>
          <div className="faq-question">
            How is PolicyMandi different from other insurance websites?
            <span className="icon">{openIndex === 1 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 1 && <div className="faq-answer">We focus on transparency, personalized recommendations, and zero hidden costs. Our smart comparison tools and expert support ensure you make the best decision for your future.</div>}
        </div>

        <div className={`faq-item ${openIndex === 2 ? 'open' : ''}`} onClick={() => toggle(2)}>
          <div className="faq-question">
            Is buying insurance online through PolicyMandi safe?
            <span className="icon">{openIndex === 2 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 2 &&
           <div className="faq-answer">Absolutely. We use advanced data encryption
            and partner only with IRDAI-approved insurance companies to ensure your
             transactions and information are secure.</div>}
        </div>

        <div className={`faq-item ${openIndex === 3 ? 'open' : ''}`} onClick={() => toggle(3)}>
          <div className="faq-question">
            Can I compare policies from different companies?
            <span className="icon">{openIndex === 3 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 3 && <div className="faq-answer">
            Yes! PolicyMandi allows you to compare features, premiums, claim settlement ratios,
            and customer ratings — all in one place.</div>}
        </div>

        <div className={`faq-item ${openIndex === 4 ? 'open' : ''}`} onClick={() => toggle(4)}>
          <div className="faq-question">
            How do I file claim?
            <span className="icon">{openIndex === 4 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 4 && <div className="faq-answer">
           Once you buy a policy through us, you'll get step by step claim assistance. you can either: <br/>
           1. File a cliam directly through you insurers <br/>
           2. Contact our support team to guide you through the buisness</div>}
        </div>

         <div className={`faq-item ${openIndex === 5 ? 'open' : ''}`} onClick={() => toggle(5)}>
          <div className="faq-question">
            Do I need to undergo a medical checkup?
            <span className="icon">{openIndex === 5 ? '▲' : '▼'}</span>
          </div>
          {openIndex === 5 && <div className="faq-answer">
           Once you buy a policy through us, you'll get step by step claim assistance. you can either: <br/>
           1. File a cliam directly through you insurers <br/>
           2. Contact our support team to guide you through the buisness</div>}
        </div>
      </div>
      <div className="faq-right">
        <img src={left_img} alt="Happy family image" />
      </div>
    </section>
  )
}

export default FaqSection
