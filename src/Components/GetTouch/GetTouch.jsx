import React, { useState } from 'react'
import './GetTouch.css'
import side_img from '../../assets/contact-img.png'

function GetTouch() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9e0e4ef3-73a6-426b-b562-0373e90b2896");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else if (data.value === "") {
        setResult("Please fill all the fields");
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className="get-contact-section">
      <div className="form-container">
        <h2> Get in Touch with PolicyMandi</h2>
             <hr/>  
        <p>Your insurance journey starts here. Talk to our experts today.</p>
           
        <form className="contact-form" onSubmit={onSubmit}>
          <input type="text" placeholder="Name" name='name' required/>
          <input type="email" placeholder="Email" name='email' required/>
          <input type="text" placeholder="Phone Number" name='phone' required/>
          <input type="text" placeholder="Subject" name='subject' required/>
          <textarea placeholder="Message" name='message' required></textarea>
          <button type="submit">Send Message</button>
        </form>
         <span> {result}</span>
      </div>
      <div className="image-container">
        <img src={side_img} alt="Get in touch" />
      </div>
    </div>
  )
}

export default GetTouch
