import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.jpg'

import './navbarComp.css'
const NavbarComp = () => {
  return (
    <>
    <Navbar bg="dark" id="navbar" variant="dark" className='Nav'>
        <Container >
          <Navbar.Brand className='logo' href="#home"><img src={logo}></img></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home" className='me-auto'>Home</Nav.Link>
            <Nav.Link href="/offers">Offers</Nav.Link>
            <Nav.Link href="/accomodation">Accomodation</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      </>
  )
}

export default NavbarComp