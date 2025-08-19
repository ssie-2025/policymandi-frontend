import React from 'react'
import './Bcontact.css'

function Bcontact() {
  return (
    <>
    <section className="bcontact-section">
  <div className="bcontact-container">
    <h2>Contact Us</h2>
 
  <div className="row100">
    <div className="col">
      <div className="inputBox">
        <input type="text" name='' required />
        <span className="text">First Name</span>
        <span className="line"></span>
      </div>
    </div>
    <div className="col">
      <div className="inputBox">
        <input type="text" name='' required />
        <span className="text">Last Name</span>
        <span className="line"></span>
      </div>
    </div>
  </div>
  <div className="row100">
    <div className="col">
      <div className="inputBox">
        <input type="text" name='' required />
        <span className="text">Email</span>
        <span className="line"></span>
      </div>
    </div>
    <div className="col">
      <div className="inputBox">
        <input type="text" name='' required />
        <span className="text">Mobile Number</span>
        <span className="line"></span>
      </div>
    </div>
  </div>

  <div className="row100">
    <div className="col">
      <div className="inputBox textarea">
        <textarea required></textarea>
        <span className="text">Type Your Message</span>
        <span className="line"></span>
      </div>
    </div>
  </div>

  <div className="row100">
    <div className="col">
      <div className="btn">
      <button type="submit" >send </button>
      </div>
    </div>
  </div>
   </div>
  </section>
  </>
  )
}

export default Bcontact
