import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import PropTypes from "prop-types"
import React from "react"
import RightHeader from "./right-header"

const Header = ({show}) => {
  const renderSubPages = show => {
    if (show) {
      return (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#reading">Reading List</Nav.Link>
            <Nav.Link
              href="https://dev.to/cpustejovsky/resources-2igo"
              target="_blank"
              rel="noreferrer noopener"
            >
              Resources
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      )
    }
  }
  return (
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
        {renderSubPages(show)}
        <RightHeader />
      </Navbar>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Test`,
}

export default Header
