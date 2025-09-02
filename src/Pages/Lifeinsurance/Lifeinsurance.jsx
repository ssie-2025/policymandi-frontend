import React from 'react'
import Lifehero from '../../Components/Lifeinsurance/Lifehero/Lifehero'
import Lifeabout from '../../Components/Lifeinsurance/Lifeabout/Lifeabout'
import Lifeinsurancebenefit from '../../Components/Lifeinsurance/Lifeinsurancebenefit/Lifeinsurancebenefit'
import Faq from '../../Components/Lifeinsurance/Faq/Faq'
import Contact from '../../Components/Lifeinsurance/Contact/Contact'
import Eligibility from '../../Components/Lifeinsurance/Eligibility/Eligibility'
import Policyfeature from '../../Components/Lifeinsurance/Policyfeature/Policyfeature'
import Howitwork from '../../Components/Lifeinsurance/Howitwork/Howitwork'
import Claimsettlement from '../../Components/Lifeinsurance/Claimsettlement/Claimsettlement'
import Scrolltopbtn from '../../Components/Scrolltopbtn/Scrolltopbtn'
import Heroabout from '../../Components/HeroAbout/Heroabout'
import GetTouch from '../../Components/GetTouch/GetTouch'
import CoverageCalculator from '../../Components/Calculator/CoverageCalculator'
import WorkFlow from '../../Components/WorkFlow/WorkFlow'
import FaqSection from '../../Components/FaqSection/FaqSection'

function Lifeinsurance() {
  return (
    <>
    <Heroabout heading="Life Insurance" subheading="Life insurance that gives peace of mind and lasting security."/>
    <Scrolltopbtn/>
    <Lifeabout/>
    <Lifeinsurancebenefit/>
    <CoverageCalculator/>
    <Eligibility/>
    <Policyfeature/>
    <Howitwork/>
    <WorkFlow/>
    {/* <Claimsettlement/> */}
    {/* <Faq/> */}
    <FaqSection/>
    <Contact/>
    </>
  )
}

export default Lifeinsurance
