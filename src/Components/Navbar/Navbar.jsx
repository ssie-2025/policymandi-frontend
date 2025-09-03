import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { handleSuccess } from '../../utils'
import { ToastContainer } from 'react-toastify'


function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])

  const handleLogout = (e)  => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logout');
    setTimeout(() => {
        navigate('/login');
    }, 1000)
  }

  

    return (
        <header className="main-header">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={logo} alt="" />
          </Link>
          </div>

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

        {/* <div className="icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div> */}

        <div className="btn">
          {!loggedInUser ? (
        <Link to="/login"><button>Login</button></Link>

      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
        </div>

        <button className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
    )
}

export default Navbar
