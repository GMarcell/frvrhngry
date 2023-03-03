import React from 'react'
import '../App.css'
import logo from '../asset/icons/forever hungry black transparant-01.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="mainNav" style={{backgroundColor: '#FFDC22'}}>
      <div className="container">
        <a className="navbar-brand" href="#page-top" style={{padding: '0px !important'}}>
          <img src={logo} alt='frvrhngry' style={{height: '50px'}}/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar