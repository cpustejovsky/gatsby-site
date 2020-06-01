import React, { Component } from "react"
import Header from "../components/header.jsx"
import SEO from "../components/seo"
import Resources from "../components/subpages/resources"
import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/layout.scss"
import "../scss/custom-bootstrap.scss"
export default class ResourcePage extends Component {
  render() {
    return (
      <>
        <SEO title="Resources | cpustejovsky" />
        <Header />
        <div className="site">
          <main className="site__landing">
            <Resources />
            <footer className="site__footer">
              Cpustejovsky <i className="far fa-thumbs-up"></i>,{" "}
              {new Date().getFullYear()}
            </footer>
          </main>
        </div>
      </>
    )
  }
}
