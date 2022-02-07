import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand>CPSC 329 Group Project</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/game">Game</Nav.Link>
          <Nav.Link as={Link} to="/comic">Comic</Nav.Link>
          <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
  </>
  )
}