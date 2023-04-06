import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import '../App.css';

const Header = () => {
    return(
        <>
            <Navbar className="header">
                <Container>
                    <div className="name">
                        <h2><Nav.Link>Sowmya Gorripati</Nav.Link></h2>
                    </div>

                    <Nav className="header-navbar">
                        <NavLink className="navbar-link" to="/">Home</NavLink>
                        <NavLink className="navbar-link" to="/About">About</NavLink>
                        <NavLink className="navbar-link" to="/Skills">Skills</NavLink>
                        <NavLink className="navbar-link" to="/Projects">Projects</NavLink>
                        <NavLink className="navbar-link" to="/Contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;