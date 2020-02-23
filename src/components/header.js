// import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/page-2">Page 2</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link
        href="https://cpustejovsky.com"
        target="_blank"
        rel="noreferrer"
      >
        Current Site
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link
        href="https://dev.to/cpustejovsky"
        target="_blank"
        rel="noreferrer"
      >
        My Blog
      </Nav.Link>
    </Nav.Item>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Test`,
}

export default Header
