import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" sx={{ backgroundColor: 'transparent' }} className="navbar">
        <Container>
        <Navbar.Brand as={Link} to="/" className='navbar-title'>stay safe, have fun</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className='nav-link'>Home</Nav.Link>
          <Nav.Link as={Link} to="/game" className='nav-link'>Game</Nav.Link>
          <Nav.Link as={Link} to="/comic" className='nav-link'>Comic</Nav.Link>
          <Nav.Link as={Link} to="/quiz" className='nav-link'>Quiz</Nav.Link>
          <Nav.Link as={Link} to="/about" className='nav-link'>About</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
  </>
  )
}