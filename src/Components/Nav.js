import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import { useScroll } from './Scroll.js';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLargeViewport, setIsLargeViewport] = useState(window.innerWidth > 768);
    const { y, x, scrollDirection } = useScroll();

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    
    useEffect(() => {
        const handleResize = () => setIsLargeViewport(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        // Cleanup functions to remove event listeners on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Navbar
        expand='lg'
        className={`horizontal-navbar ${scrollDirection === 'down' ? 'active' : 'hidden'}`}
        >
        <Container>
            {isLargeViewport ? null : ( // Only render on smaller viewports
            <NavbarToggle aria-controls='basic-navbar-nav' onClick={toggleNav} className='bg-warning' />
            )}
            <Collapse in={isLargeViewport || isOpen} id='basic-navbar-nav'>
            <Nav className=''>
                <Nav.Link href='/'>
                Home
                </Nav.Link>
                <Nav.Link href='#our-story'>
                Our Story
                </Nav.Link>
                <Nav.Link href='#wedding-info'>
                Wedding Info
                </Nav.Link>
                <Nav.Link
                href='https://docs.google.com/forms/d/e/1FAIpQLSd8wqlHVvA50ze9Srhta26qFRdQ-WzG6eslr3vVCcXapVlpIg/viewform?usp=sf_link'
                target='_blank'
                >
                RSVP
                </Nav.Link>
                <Nav.Link href='#'>
                Registry
                </Nav.Link>
                <Nav.Link href='#vendors'>
                Vendors
                </Nav.Link>
            </Nav>
            </Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;
