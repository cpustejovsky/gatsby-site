import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <>
    <style></style>
    <Navbar
      bg="header"
      variant="light"
      expand="lg"
      sticky="top"
      className="mr-auto"
    >
      <Navbar.Brand href="/">
        Cpustejovsky <i class="far fa-thumbs-up"></i>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#reading">Reading List</Nav.Link>
          <Nav.Link href="https://dev.to/cpustejovsky/resources-2igo" target="_blank" rel="noreferrer noopener">Resources</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="https://github.com/cpustejovsky">
            <i class="fab fa-github"></i>
          </Nav.Link>
          <Nav.Link href="https://dev.to/cpustejovsky">
            <i class="fab fa-dev"></i>
          </Nav.Link>
          <Nav.Link href="https://twitter.com/CCPustejovsky">
            <i class="fab fa-twitter-square"></i>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/cpustejovsky/">
            <i class="fab fa-linkedin"></i>
          </Nav.Link>
          <Nav.Link href="mailto:charles@cpustejovsky.com">
            <i class="far fa-envelope"></i>
          </Nav.Link>
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
