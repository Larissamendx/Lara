    import React from "react";
    import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
    import styles from './styles.module.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
 
    function NavBar() {
        return (
            <div className={styles.navbarContainer}>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <img src="./images/logo.svg" alt="Logo" width="100" className={styles.logo}/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">Funcionalidades</Nav.Link>
                    <Nav.Link href="#pricing">Planos</Nav.Link>
                    <Nav.Link href="#pricing">Faq</Nav.Link>
                    </Nav>
            
                    <Nav>
                    <Nav.Link href="#deets">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>
    </div>
        );
    }

    export default NavBar;