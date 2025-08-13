import React from 'react'
import './Home.css'
import Hero from "../../Components/Hero/Hero";
import Heading from '../../Components/Heading/Heading'
import Feature from '../../Components/Feature/Feature'
import Video from '../../Components/Video/Video'
import Insurancematter from '../../Components/InsuranceMatter/Insurancematter'
import Whatweserve from '../../Components/Whatweserve/Whatweserve'
import Bannersection from '../../Components/Bannersection/Bannersection'
import Brandcarousel from '../../Components/BrandCarousel/Brandcarousel'
import Whylifeinsurance from '../../Components/WhyLifeInsurance/Whylifeinsurance'
import Quickaccess from '../../Components/Quickaccess/Quickaccess';
import Scrolltopbtn from '../../Components/Scrolltopbtn/Scrolltopbtn';
import Chatbot from '../../Components/Chatbot/Chatbot';


function Home() {
  return (
    <>
      <Hero/>
      <Chatbot/>
      <Scrolltopbtn/>
      <Heading  title='Why Choose PolicyMandi?'/>
      <Feature/>
      {/* <Video/> */}
      <Whatweserve/>
      <Insurancematter/> 
      <Heading  title='Our Parters' subTitle="Secure your future with leading insurance partners"/>
      <Brandcarousel/>
      <Bannersection/>
      <Whylifeinsurance/>
    </>
  )
}

export default Home
