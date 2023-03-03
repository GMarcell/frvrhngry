import React from 'react'
import '../App.css'
import logo from '../asset/icons/forever hungry black transparant-01.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarBootstrap() {
  return (
    <Navbar expand="md" style={{backgroundColor: '#ffdc22'}}>
      <Container>
        <Navbar.Brand href="/">
          <img width='30' height='30' src={logo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav d-flex justify-content-end" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-end" style={{width: '100%'}}>
            <Nav.Link href="/" className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="/shop" className='fw-bold'>Shop</Nav.Link>
            <Nav.Link href="/about-us" className='fw-bold'>About Us</Nav.Link>
            <Nav.Link href="/contact" className='fw-bold'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarBootstrap