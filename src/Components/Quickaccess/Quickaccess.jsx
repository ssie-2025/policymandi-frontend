import React from 'react'
import './Quickaccess.css'
import icon1 from '../../assets/icon/icon1.png'
import icon2 from '../../assets/icon/icon2.png'
import icon3 from '../../assets/icon/icon3.png'
import icon4 from '../../assets/icon/icon4.png'
import icon5 from '../../assets/icon/icon5.png'

const action = [
    {
        title: "Pay Premium",
        image: icon1,
    },
    {
        title: "Download Statement",
        image: icon2,
    },
    {
        title: "Register Claim",
        image: icon3,
    },
    {
        title: "Raise Service Request",
        image: icon4,
    },
    {
        title: "Login to my Account",
        image: icon5,
    },
]
function Quickaccess() {
  return (

    <div className="quick-access-section">
        <h2>
            <span>Quick Access</span> for our customers
        </h2>
        <div className="card-container">
            {action.map((item, index) =>(
                <div key={index} className='quick-card'>
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Quickaccess
