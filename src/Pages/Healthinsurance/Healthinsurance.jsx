import React from 'react'
import Heroabout from '../../Components/HeroAbout/Heroabout'
import Aboutinsurance from '../../Components/Healthinsurance/Aboutinsurance/Aboutinsurance'
import Types from '../../Components/Healthinsurance/Types/Types'
import Benefithealth from '../../Components/Lifeinsurance/Benefithealth/Benefithealth'
import Eligibility from '../../Components/Healthinsurance/Eligibility/Eligibility'
import Healthpolicy from '../../Components/Healthinsurance/Healthpolicy/Healthpolicy'
import Comparison from '../../Components/Healthinsurance/Comparison/Comparison'
import Tab from '../../Components/Healthinsurance/Tab/Tab'
import Faqhealth from '../../Components/Healthinsurance/Faqhealth/Faqhealth'
import Contact from '../../Components/Lifeinsurance/Contact/Contact'
import Scrolltopbtn from '../../Components/Scrolltopbtn/Scrolltopbtn'
import GetTouch from '../../Components/GetTouch/GetTouch'
import FaqSection from '../../Components/FaqSection/FaqSection'

function Healthinsurance() {
  return (
   <>
   <Heroabout heading="Health Insurance" subheading=" Secure your health with trusted coverage from PolicyMandi."/>
   <Scrolltopbtn/>
   <Aboutinsurance/>
   <Types/>
   <Benefithealth/>
   <Eligibility/>
   <Healthpolicy/>
   <Comparison/>
   <Tab/>
   <FaqSection/>
   {/* <Faqhealth/> */}
   <Contact/>
   </>
  )
}

export default Healthinsurance
