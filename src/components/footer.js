import React from 'react'
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {FaGithub, FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () =>{
    return(
        <>
            <div className='footer'>
                <Navbar className='footer-navbar' fixed='bottom' bg='dark' variant='dark' expand='lg'>
                    <h4> Lets connect digitally</h4>
                    <Nav>
                        <Nav.Link className='icons' to="https://github.com/sowmya009" ><FaGithub /></Nav.Link>
                        <Nav.Link className='icons' to="/" ><FaLinkedin /></Nav.Link>
                        <Nav.Link className='icons' to="/" ><FaTwitter /></Nav.Link>
                        <Nav.Link className='icons' to="/" ><FaInstagram /></Nav.Link>   
                    </Nav>
                </Navbar>
            </div>
        </>
    );
}

export default Footer;
