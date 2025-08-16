import React from 'react'
import './Home.css'
import Hero from "../../Components/Hero/Hero";
import Heading from '../../Components/Heading/Heading'
import Feature from '../../Components/Feature/Feature'
import Insurancematter from '../../Components/InsuranceMatter/Insurancematter'
import Whatweserve from '../../Components/Whatweserve/Whatweserve'
import Bannersection from '../../Components/Bannersection/Bannersection'
import Brandcarousel from '../../Components/BrandCarousel/Brandcarousel'
import Whylifeinsurance from '../../Components/WhyLifeInsurance/Whylifeinsurance'
import Scrolltopbtn from '../../Components/Scrolltopbtn/Scrolltopbtn';
import Chatbot from '../../Components/Chatbot/Chatbot';
import Testimonial from '../../Components/Testimonial/Testimonial';
import TabCalculator from '../../Components/TabCalculator/TabCalculator';
import GetTouch from '../../Components/GetTouch/GetTouch';
import Quickaccess from '../../Components/Quickaccess/Quickaccess'
// import Popup from '../../Components/Popup/Popup';



function Home() {
  return (
    <>
      <Hero/>
      {/* <Popup/> */}
      <Chatbot/>
      <Scrolltopbtn/>
      <Heading  title='Why Choose PolicyMandi?'/>
      <Feature/>
      <Whatweserve/>
      <TabCalculator/>
      <Quickaccess/>
      <Insurancematter/> 
      <Heading  title='Our Parters' subTitle="Secure your future with leading insurance partners"/>
      <Brandcarousel/>
      <Bannersection/>
      <GetTouch/>
      <Whylifeinsurance/>
      <Testimonial/>
    </>
  )
}

export default Home
