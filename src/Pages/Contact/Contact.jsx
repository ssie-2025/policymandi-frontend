import React from 'react'
import Heroabout from '../../Components/HeroAbout/Heroabout'
import Contactsection from '../../Components/Contactus/Contactsection/Contactsection'
import Contactmap from '../../Components/Contactus/Contactmap/Contactmap'
import Scrolltopbtn from '../../Components/Scrolltopbtn/Scrolltopbtn'
import Contactpage from '../../Components/Contactus/Contactpage/Contactpage'
import Bcontact from '../../Components/Bcontact/Bcontact'
import ContactInfo from '../../Components/Contactus/ContactInfo/ContactInfo'
import ContactTestimonial from '../../Components/Contactus/ContactTestimonial/ContactTestimonial'

function Contact() {
  return (
    <>
    
    {/* <Scrolltopbtn/> */}
    <Bcontact/>
    {/* <Contactpage/> */}
    {/* <Contactsection/> */}
    <ContactInfo/>
    {/* <ContactTestimonial/> */}
    <Contactmap/>
    </>
  )
}

export default Contact
