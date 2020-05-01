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
        Cpustejovsky <i className="far fa-thumbs-up"></i>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="https://github.com/cpustejovsky">
            <i className="fab fa-github"></i>
          </Nav.Link>
          <Nav.Link href="https://dev.to/cpustejovsky">
            <i className="fab fa-dev"></i>
          </Nav.Link>
          <Nav.Link href="https://twitter.com/CCPustejovsky">
            <i className="fab fa-twitter-square"></i>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/cpustejovsky/">
            <i className="fab fa-linkedin"></i>
          </Nav.Link>
          <Nav.Link href="mailto:charles@cpustejovsky.com">
            <i className="far fa-envelope"></i>
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
