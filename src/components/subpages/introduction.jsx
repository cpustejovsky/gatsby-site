import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Ikigai from "../images/ikigai"
import Resume from "../docs/Cpustejovsky_Resume.pdf"
const Introduction = () => (
  <Container>
    <Row className="introduction">
      <Col lg={6}>
        <Ikigai />
      </Col>
      <Col lg={6}>
        <h3>Howdy!</h3>
        <p>
          An{" "}
          <strong>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.forbes.com/sites/chrismyers/2018/02/23/how-to-find-your-ikigai-and-transform-your-outlook-on-life-and-business/#4bb1f0872ed4"
            >
              ikigai
            </a>{" "}
          </strong>
          is something you're passionate about, talented at, can have a career
          in, and can help the world with.
        </p>
        <p>
          After years of searching,{" "}
          <strong>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://dev.to/cpustejovsky/a-month-of-development-work-52gh"
            >
              I realized that programming is my ikigai.
            </a>{" "}
          </strong>
          Since then I've learned as much as I can about how to use computer
          science and code to build things that provide value.
        </p>
        <hr />
        <div>
          <a href={Resume}>
            <Button variant="primary">Resume</Button>
          </a>
        </div>
      </Col>
    </Row>
  </Container>
)

export default Introduction
