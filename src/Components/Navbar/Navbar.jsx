import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png'

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="main-header">
      <div className="container">
        <div className="logo"><img src={logo} alt="" height={50} width={100} /></div>

        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</Link></li>
            <li >
               <Link to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Us</Link>
            </li>
            <li>
              <Link to="/life-insurance" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Life Insurance</Link>
            </li>
            <li>
              <Link to="/health-insurance" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Health Insurance</Link>
            </li>
            <li><Link to="/motor-insurance" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Motor Insurance</Link></li>
            <li><Link to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact Us</Link></li>
          </ul>
        </nav>

        <div className="icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>

        <button className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
    )
}

export default Navbar
