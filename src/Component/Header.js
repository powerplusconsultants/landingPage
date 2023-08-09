import {Navbar, Container, Nav} from "react-bootstrap";
import logoPec from "./../assets/LogoPEC.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <img 
                        src={logoPec}
                        alt="Logo PEC"
                        height = "65"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end"> 
                    <Nav className="ml-auto">
                        <Nav.Link onClick={() => {navigate("/",{ state: { targetId: 'specialization'}})}}>Services</Nav.Link>
                        <Nav.Link onClick={() => {navigate("/",{ state: { targetId: 'profile'}})}} >About Us</Nav.Link>
                        <Nav.Link onClick={() => {navigate("/",{ state: { targetId: 'footer'}})}} >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;  