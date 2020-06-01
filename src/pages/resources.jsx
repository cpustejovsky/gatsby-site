import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Header from "../components/header.jsx"
import SEO from "../components/seo"
import ARCHIVIST from "../components/images/archivist"
import axios from "axios"
import parse from "html-react-parser"
export default class resources extends Component {
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
        <SEO title="Charles Pustejovsky | Full-Stack Developer" />
        <Header />
        <div className="site">
          <main className="site__landing">
            <Container>
              <h1>Resources</h1>
              <ARCHIVIST/>
              <br />
              {parse(this.state.data)}
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
