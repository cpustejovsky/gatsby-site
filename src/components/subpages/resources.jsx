import React, { Component } from "react"
import { Container } from "react-bootstrap"
import ARCHIVIST from "../images/archivist"
import axios from "axios"
import parse from "html-react-parser"
export default class Resources extends Component {
  constructor() {
    super()
    this.state = { data: "" }
  }

  async componentDidMount() {
    let post = await axios.get(`https://dev.to/api/articles/281175`)
    let data = post.data.body_html
    this.setState({ data: parse(data) })
  }
  renderData(data) {
    return data ? (
      data
    ) : (
      <p>
        Page not working. Resource page can be found{" "}
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://dev.to/cpustejovsky/resources-2igo"
        >
          here
        </a>
      </p>
    )
  }
  render() {
    return (
      <Container>
        <h1>Resources</h1>
        <ARCHIVIST />
        <br></br>
        {this.renderData(this.state.data)}
        <hr />
        <p>
          Resources are hosted on{" "}
          <a rel="noreferrer noopener" target="_blank" href="https://dev.to/">
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
    )
  }
}
