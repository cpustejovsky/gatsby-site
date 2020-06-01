/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/layout.scss"
import "../scss/custom-bootstrap.scss"

const Layout = ({ children }) => {

  const [starsCount, setStarsCount] = useState(0)
useEffect(() => {
  // get data from GitHub api
  fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
    .then(response => response.json()) // parse JSON from request
    .then(resultData => {
      setStarsCount(resultData.stargazers_count)
    }) // set data for the number of stars
}, [])
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} show={true}/>
      <div className="site">
        <main className="site__content">
          {children}{" "}
          <footer className="site__footer">
            Cpustejovsky <i class="far fa-thumbs-up"></i>,{" "}
            {new Date().getFullYear()}; Fetch Test: {starsCount}
          </footer>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
