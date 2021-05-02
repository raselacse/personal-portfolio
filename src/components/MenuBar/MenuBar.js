import React from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Image_Icon/Image/Logo.svg'

const MenuBar = () => {

    return (
        <>
            <Navbar className="sticky-top" bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/home"><Image style={{height: "30px"}} src={logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Button variant="outline-primary" href="https://drive.google.com/file/d/1ZAMw2o2_mrwPhY29ADnEf10k0mM1mSfd/view?usp=sharing" target="_blank">
                            Resume
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default MenuBar;