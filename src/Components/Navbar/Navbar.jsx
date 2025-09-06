import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { handleSuccess } from '../../utils'
import { ToastContainer } from 'react-toastify'
import { NavLink } from "react-router-dom";


function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const [loggedInUser, setLoggedInUser] = useState('');
        const [dropdownOpen, setDropdownOpen] = useState(false);
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

           <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About Us
          </NavLink>
        </li>

        {/* Dropdown Menu */}
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="nav-link">Insurance ▾</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/life-insurance" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Life Insurance
                </NavLink>
              </li>
              <li>
                <NavLink to="/health-insurance" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Health Insurance
                </NavLink>
              </li>
              <li>
                <NavLink to="/motor-insurance" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Motor Insurance
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>

        {/* <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
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
        </nav> */}

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
