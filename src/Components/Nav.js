import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLargeViewport, setIsLargeViewport] = useState(window.innerWidth > 768);
    const [isNavbarHidden, setIsNavbarHidden] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => setIsLargeViewport(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);

        const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsNavbarHidden(scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup functions to remove event listeners on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar
        expand='lg'
        fixed='top'
        className={`horizontal-navbar ${isNavbarHidden ? 'hidden' : ''}`}
        onMouseEnter={toggleNav}
        onMouseLeave={toggleNav}
        >
        <Container>
            {isLargeViewport ? null : ( // Only render on smaller viewports
            <NavbarToggle aria-controls='basic-navbar-nav' onClick={toggleNav} className='bg-warning' />
            )}
            <Collapse in={isLargeViewport || isOpen} id='basic-navbar-nav'>
            <Nav className='me-auto'>
                <Nav.Link href='#home'>
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
