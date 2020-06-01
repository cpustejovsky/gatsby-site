import React, { Component } from "react"
import { Container } from "react-bootstrap"
import Header from "../components/header.jsx"
import SEO from "../components/seo"
import ARCHIVIST from "../components/images/archivist"
import axios from "axios"
import parse from "html-react-parser"
import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/layout.scss"
import "../scss/custom-bootstrap.scss"
export default class Resources extends Component {
  constructor() {
    super()
    this.state = { data: "" }
  }

  async componentDidMount() {
    let post = await axios.get(`https://dev.to/api/articles/281175`)
    let data = post.data.body_html
    this.setState({ data: data })
  }

  render() {
    return (
      <>
        <SEO title="Resources | Cpustejovsky" />
        <Header />
        <div className="site">
          <main className="site__landing">
            <Container>
              <h1>Resources</h1>
              <ARCHIVIST />
              <br></br>
              {parse(this.state.data)}
              <hr />
              <p>
                Resources are hosted on{" "}
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://dev.to/"
                >
                  DEV.to
                </a>{" "}
                and fetched using the{" "}
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://docs.dev.to/api/"
                >
                  DEV Community API
                </a>
                .
              </p>
            </Container>
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
