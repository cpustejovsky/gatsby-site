import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <>
    <style></style>
    <Navbar bg="header" variant="light" expand="lg" sticky="top" className="mr-auto">
      <Navbar.Brand href="/">Cpustejovsky</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#reading">Reading List</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#">Icon</Nav.Link>
          <Nav.Link href="#">Icon</Nav.Link>
          <Nav.Link href="#">Icon</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Test`,
}

export default Header
