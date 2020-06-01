import React from "react"
import Header from "../components/header.jsx"
import SEO from "../components/seo"
import Help from "../components/subpages/help"
import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/layout.scss"
import "../scss/custom-bootstrap.scss"
const HelpLandingPage = () => (
  <>
    <SEO title="Help Me Level Up! | cpustejovsky" />
    <Header />
    <div className="site">
      <main className="site__landing">
        <Help />
        <footer className="site__footer">
          Cpustejovsky <i className="far fa-thumbs-up"></i>,{" "}
          {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  </>
)

export default HelpLandingPage
