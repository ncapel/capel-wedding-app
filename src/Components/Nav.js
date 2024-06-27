import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLargeViewport, setIsLargeViewport] = useState(window.innerWidth > 768);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    let prevScrollPos = window.pageYOffset;
    window.addEventListener('scroll', function() {
        const currentScrollPos = window.pageYOffset;
            
        if (prevScrollPos > currentScrollPos) {
            document.querySelector('.navbar').classList.add('hidden');
            document.querySelector('.navbar').classList.remove('show');
        } else {
            document.querySelector('.navbar').classList.add('show');
            document.querySelector('.navbar').classList.remove('hidden');
        }
    });

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
        className={`horizontal-navbar`}
        >
        <Container>
            {isLargeViewport ? null : ( // Only render on smaller viewports
            <NavbarToggle aria-controls='basic-navbar-nav' onClick={toggleNav} className='bg-warning' />
            )}
            <Collapse in={isLargeViewport || isOpen} id='basic-navbar-nav'>
            <Nav className='me-auto'>
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
