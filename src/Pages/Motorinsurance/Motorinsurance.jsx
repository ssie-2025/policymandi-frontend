import React from 'react'
import Heroabout from '../../Components/HeroAbout/Heroabout'
import Motorabout from '../../Components/Motorinsurance/Motorabout/Motorabout'
import Motortype from '../../Components/Motorinsurance/Motortype/Motortype'
import MotorComparison from '../../Components/Motorinsurance/Motorcomparison/MotorComparison'
import Motorcriteria from '../../Components/Motorinsurance/Motorcriteria/Motorcriteria'
import Motorpayment from '../../Components/Motorinsurance/Motorpayment/Motorpayment'
import Bannersection from '../../Components/Bannersection/Bannersection'
import Contact from '../../Components/Lifeinsurance/Contact/Contact'
import Motorwhybuy from '../../Components/Motorinsurance/Motorwhybuy/Motorwhybuy'
import Motorfaq from '../../Components/Motorinsurance/Motorfaq/Motorfaq'
import Scrolltopbtn from '../../Components/Scrolltopbtn/Scrolltopbtn'
import PremiumCalculator from '../../Components/Calculator/PremiumCalculator'
import FaqSection from '../../Components/FaqSection/FaqSection'

function Motorinsurance() {
  return (
    <>
    <Heroabout heading="Motor Insurance" subheading="Drive worry-free with coverage that keeps you protected on every road."/>
    <Scrolltopbtn/>
    <Motorabout/>
    <Motortype/>
    <MotorComparison/>
    <Motorcriteria/>
    <Motorpayment/>
    <PremiumCalculator/>
    <Bannersection/>
    <Motorwhybuy/>
    {/* <Motorfaq/> */}
    <FaqSection/>
    <Contact/>
    </>
  )
}

export default Motorinsurance
