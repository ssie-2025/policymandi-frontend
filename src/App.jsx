import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hero from './Components/Hero/Hero'
// import Heading from './Components/Heading/Heading'
// import Feature from './Components/Feature/Feature'
// import Video from './Components/Video/Video'
// import Insurancematter from './Components/InsuranceMatter/Insurancematter'
// import Whatweserve from './Components/Whatweserve/Whatweserve'
// import Bannersection from './Components/Bannersection/Bannersection'
// import Brandcarousel from './Components/BrandCarousel/Brandcarousel'
import Footer from './Components/Footer/Footer'
// import Whylifeinsurance from './Components/WhyLifeInsurance/Whylifeinsurance'
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Lifeinsurance from './Pages/Lifeinsurance/Lifeinsurance';
import Healthinsurance from './Pages/Healthinsurance/Healthinsurance';
import Motorinsurance from './Pages/Motorinsurance/Motorinsurance';
import Contact from './Pages/Contact/Contact';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import CalculatorPage from './Pages/CalculatorPage/CalculatorPage';




function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/life-insurance' element={<Lifeinsurance/>}/>
        <Route path='/health-insurance' element={<Healthinsurance/>}/>
        <Route path='/motor-insurance' element={<Motorinsurance/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/calculator' element={<CalculatorPage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
