import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
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
      <Container id="resources" className="site__section">
        <Row>
          <Col md={12}>
            <h1>Resources</h1>
            <hr/>
            {parse(this.state.data)}
          </Col>
        </Row>
      </Container>
    )
  }
}
