import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../App.css";
import logo from "../Assets/images/logo.svg";

function NavBar() {
  return (
    <Navbar sticky="top" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="logo"
            width="30"
            height="30"
            className="d-inline-block align-top logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="ms-2">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="ms-2">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="ms-2">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/publications" className="ms-2">
              Publications
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" className="ms-2">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
