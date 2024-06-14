import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLargeViewport, setIsLargeViewport] = useState(window.innerWidth > 768); // Adjust breakpoint as needed

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => setIsLargeViewport(window.innerWidth > 768); // Adjust breakpoint as needed
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Navbar expand='lg' fixed='top' className='vertical-navbar'>
        <Container>
        {isLargeViewport ? null : ( // Only render on smaller viewports
            <NavbarToggle aria-controls='basic-navbar-nav' onClick={toggleNav} className='bg-warning' />
        )}
            <Collapse in={isLargeViewport || isOpen} id='basic-navbar-nav'>
            <Nav className='me-auto'>
                <Nav.Link href='/#home' className='a-color'>Home</Nav.Link>
                <Nav.Link href='/#our-story' className='a-color'>Our Story</Nav.Link>
                <Nav.Link href='/#wedding-info' className='a-color'>Wedding Info</Nav.Link>
                <Nav.Link href='#' className='a-color'>RSVP</Nav.Link>
                <Nav.Link href='#' className='a-color'>Registry</Nav.Link>
                <Nav.Link href='/#vendors' className='a-color'>Vendors</Nav.Link>
            </Nav>
            </Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;

