import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Reviews } from '../Reviews/Reviews'
export const Topbar = () => {
    return (
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Testimonials</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/view">View</Link>
      </Nav>
    </Navbar.Collapse>
    <Routes>
      <Route path="/view">
        <Reviews />
      </Route>
    </Routes>
  </Container>
</Navbar>
</Router>
    )
}