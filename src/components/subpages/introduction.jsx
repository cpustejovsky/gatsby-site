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
          is where your passion, career path, talents, and ability to provide value meet.
        </p>
        {/* TODO: add blog post story */}
        <p>
          Programming is my ikigai which is why I continually learn and grow and work on things that provides value to myself and others.
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
