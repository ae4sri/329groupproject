import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
    <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand>CPSC 329 Group Project</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/game">Game</Nav.Link>
          <Nav.Link href="/comic">Comic</Nav.Link>
          <Nav.Link href="/quiz">Quiz</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
  </>
  )
}