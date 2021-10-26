import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function FishHeader() {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/home" as={NavLink} activeClassName="active">Home</Nav.Link>
                        <Nav.Link to="/LogInForm" as={NavLink} activeClassName="active">Form</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};