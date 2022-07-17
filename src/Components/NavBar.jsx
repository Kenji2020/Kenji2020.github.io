import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
function navBar() {
  return (
    <Navbar className="background-color" expand="lg">
    <Container className= "flex space-between">
        <div>
            <Navbar.Brand href="/">Contacto: victor.ignacio.salgado2002@gmail.com</Navbar.Brand>
        </div>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link href="/Inicio" className="navbar-nav">Inicio</Nav.Link>
                <Nav.Link href="/Proyectos" className="navbar-nav">Proyectos</Nav.Link>
                <Nav.Link href="/Conocimientos" className="navbar-nav">Conocimientos</Nav.Link>
            </Nav>
        </Navbar.Collapse>

        </div>
    </Container>
</Navbar>
  );
}

export default navBar;