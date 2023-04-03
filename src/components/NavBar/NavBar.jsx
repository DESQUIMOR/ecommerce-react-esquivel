import {Nav, Container, Navbar} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import "./nabBar.css"

function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home"><Link to = "/">Ecomerce-Esquivel</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="Link" to = "/">Home</Link>
                    <Link className="Link" to = "/category/gorras">Gorras</Link>
                    <Link className="Link" to = "/category/camisas">Camisas</Link>
                    <Link className="Link" to = "/category/pantalones">Pantalones</Link> 
                </Nav>
                <Nav.Link href="#link"><CartWidget/></Nav.Link>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar