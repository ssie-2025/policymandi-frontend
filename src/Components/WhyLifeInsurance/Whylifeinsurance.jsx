import React,{ useState } from 'react'
import './Whylifeinsurance.css';

function Whylifeinsurance() {
    const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="why-life-insurance-section">
      <div className="life-left">
        <h2>Why Take Life Insurance?</h2>
        <div className="underline-deco"></div>
        <p>
          Life insurance isn’t just a policy — it’s a promise to protect the
          people you love. It ensures that your family stays financially secure
          even when you’re not around.
        </p>
      </div>

      <div className="life-right">
        {/* Accordion 1 */}
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggle(1)}>
             1. Financial Security for Your Family
            <span>{openIndex === 1 ? "▲" : "▼"}</span>
          </div>
          {openIndex === 1 && (
            <div className="accordion-body">
              In case of your unfortunate demise, life insurance provides a lump-sum payout to your dependents — covering daily expenses, children’s education, and household needs.
            </div>
          )}
        </div>

        {/* Accordion 2 */}
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggle(2)}>
             2. Covers Loans & Liabilities
            <span>{openIndex === 2 ? "▲" : "▼"}</span>
          </div>
          {openIndex === 2 && (
            <div className="accordion-body">
              Your home loan, personal loan, or any unpaid debt won’t become a burden on your family. The policy payout can take care of it.
            </div>
          )}
        </div>

        {/* Accordion 3 */}
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggle(3)}>
             3. Peace of Mind
            <span>{openIndex === 3 ? "▲" : "▼"}</span>
          </div>
          {openIndex === 3 && (
            <div className="accordion-body">
              Knowing that your family will be financially protected, no matter what, gives you long-term peace of mind.
            </div>
          )}
        </div>

        {/* Accordion 4 */}
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggle(4)}>
             4. Affordable Protection
            <span>{openIndex === 4 ? "▲" : "▼"}</span>
          </div>
          {openIndex === 4 && (
            <div className="accordion-body">
             Term insurance offers high coverage at very low premiums — starting at just ₹500/month.
            </div>
          )}
        </div>

        {/* Accordion 5 */}
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggle(5)}>
             5. Tax Benefits
            <span>{openIndex === 5 ? "▲" : "▼"}</span>
          </div>
          {openIndex === 5 && (
            <div className="accordion-body">
             Premiums paid qualify for tax deductions under Section 80C, and claim payouts are usually tax-free under Section 10(10D).
            </div>
          )}
        </div>

        {/* Accordion 6 */}
        <div className="accordion-item">
          <div className="accordion-header" onClick={() => toggle(6)}>
             6. Build Long-Term Wealth (ULIPs & Endowment Plans)
            <span>{openIndex === 6 ? "▲" : "▼"}</span>
          </div>
          {openIndex === 6 && (
            <div className="accordion-body">
              Some life insurance plans also help you grow your savings while staying protected.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Whylifeinsurance
