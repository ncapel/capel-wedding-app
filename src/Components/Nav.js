import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Collapse from 'react-bootstrap/Collapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
    <Navbar bg="dark" expand="never" fixed="top" className="vertical-navbar">
        <Container>
            {/* <Navbar.Brand href="#" className="text-white">Your Brand Name</Navbar.Brand> */}
            <NavbarToggle aria-controls="basic-navbar-nav" onClick={toggleNav} className="bg-warning" />
            <Collapse in={isOpen} id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#" className="text-white">Home</Nav.Link>
                <Nav.Link href="#" className="text-white">Our Story</Nav.Link>
                <Nav.Link href="#" className="text-white">Meet the Team</Nav.Link>
                <Nav.Link href="#" className="text-white">Wedding Info</Nav.Link>
                <Nav.Link href="#" className="text-white">RSVP</Nav.Link>
                <Nav.Link href="#" className="text-white">Registry</Nav.Link>
                <Nav.Link href="#" className="text-white">Vendors</Nav.Link>
            </Nav>
            </Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;
