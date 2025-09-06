import React from 'react'
import './Lifeabout.css'
import lifeinsurance from '../../../assets/aboutImg.png'

function Lifeabout() {
  return (
    <section className="life-about-section">
      <div className="life-about-content">
        <div className="image-section">
          <img
            src={lifeinsurance}
            alt="life insurance"
          />
        </div>

        <div className="text-section">
          <h2>Life Insurance<br />with Policy Mandi</h2>
          <p>
            Protect What Matters Most – Your Family’s Future
            <br />
            <br />
            Life is uncertain, but your family’s security doesn’t have to be.
            At Policy Mandi, we make it simple to choose the right life
            insurance plan that ensures your loved ones are financially
            protected, no matter what tomorrow brings.
          </p>
          <p>
            Whether you’re planning for your children’s education, securing your family’s
            lifestyle, or leaving behind a lasting legacy, our tailored solutions offer: <br /> <br />

           <b> &#8594; Comprehensive Coverage – </b>safeguard your family against life’s uncertainties.<br />
           <b> &#8594;  Affordable Premiums – </b>plans that fit every budget without compromise.<br />
          </p>

          <button className="button">Begin Your Insurance Journey</button>
        </div>
      </div>
    </section>
  )
}

export default Lifeabout
