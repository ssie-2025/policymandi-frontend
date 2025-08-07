import React from 'react'
import Heroabout from '../../Components/HeroAbout/Heroabout'
import Aboutus from '../../Components/Aboutus/Aboutus'
import Weoffer from '../../Components/Weoffer/Weoffer'
import Ourmission from '../../Components/Ourmission/Ourmission'
import Whyus from '../../Components/Whyus/Whyus'
import Acoordion from '../../Components/Accordion/Acoordion'
import Corevalue from '../../Components/Corevalue/Corevalue'
import Introduction from '../../Components/Introduction/Introduction'
import Scrolltopbtn from '../../Components/Scrolltopbtn/Scrolltopbtn'

function About() {
  return (
    <>
    <Heroabout heading="About Us" subheading="On a mission to redefine how India experiences insurance."/>
    <Scrolltopbtn/>
    <Aboutus/>
    <Introduction/>
    <Weoffer/>
    <Ourmission/>
    <Whyus/>
    <Corevalue/>
    <Acoordion/>
    </>
  )
}

export default About
