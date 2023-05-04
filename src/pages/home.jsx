import React from 'react';
import './home.css'
import Logo from '../images/Dynamics.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';            
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {
    
    return(
        <>
 <Navbar bg="light" variant="light" >
        <Container m='0' >
          <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
};

export default Home;
