import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <>
    <style>

    </style>
    <Navbar bg="header" variant="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">Cpustejovsky</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  // <Nav className="justify-content-center" activeKey="/home">
  //   <Nav.Item>
  //     <Nav.Link href="/">Home</Nav.Link>
  //   </Nav.Item>
  //   <Nav.Item>
  //     <Nav.Link href="/page-2">Page 2</Nav.Link>
  //   </Nav.Item>
  //   <Nav.Item>
  //     <Nav.Link
  //       href="https://cpustejovsky.com"
  //       target="_blank"
  //       rel="noreferrer"
  //     >
  //       Current Site
  //     </Nav.Link>
  //   </Nav.Item>
  //   <Nav.Item>
  //     <Nav.Link
  //       href="https://dev.to/cpustejovsky"
  //       target="_blank"
  //       rel="noreferrer"
  //     >
  //       My Blog
  //     </Nav.Link>
  //   </Nav.Item>
  // </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Test`,
}

export default Header
