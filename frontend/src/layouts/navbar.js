
import {Navbar,Nav, Container} from "react-bootstrap"
import { Outlet,Link } from "react-router-dom"
const NavBarExample=()=>{
    return (
        <>
            <Navbar expand="lg" variant="dark"  className="navBg" >
                <Container>
                    <Navbar.Brand as={Link} to="/">El rinconcito de la Abuela</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/contactanos">Contáctanos</Nav.Link>
                        <Nav.Link as={Link} to="/listarClientes">Clientes</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}
export default NavBarExample