import {Nav, Container, Navbar} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'


function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">Ecomerce-Esquivel</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Gorras</Nav.Link>
                    <Nav.Link href="#link">Camisas</Nav.Link>
                </Nav>
                <Nav.Link href="#link"><CartWidget/></Nav.Link>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar