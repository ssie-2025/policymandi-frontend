import React from 'react'
import './Contactmap.css'

function Contactmap() {
  return (
    <div className="contactmap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91936.29359290875!2d80.90302654564616!3d26.840315072170075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1753938421595!5m2!1sen!2sin" 
        width={1330} height={450} style={{border: 0, borderRadius: "60px"}}></iframe>
    </div>
  )
}

export default Contactmap
