import React from 'react'
import Heroabout from '../../Components/HeroAbout/Heroabout'
import Contactsection from '../../Components/Contactus/Contactsection/Contactsection'
import Contactmap from '../../Components/Contactus/Contactmap/Contactmap'
import Scrolltopbtn from '../../Components/Scrolltopbtn/Scrolltopbtn'
import Contactpage from '../../Components/Contactus/Contactpage/Contactpage'

function Contact() {
  return (
    <>
    <Heroabout heading="Contact Us" />
    <Scrolltopbtn/>
    <Contactpage/>
    {/* <Contactsection/> */}
    <Contactmap/>
    </>
  )
}

export default Contact
