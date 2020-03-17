import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Ikigai from "../images/ikigai"
import Resume from "../docs/Cpustejovsky_Resume.pdf"
const Introduction = () => (
  <Container>
    <Row className="introduction__items">
      <Col lg={6}>
        <Ikigai />
      </Col>
      <Col lg={6}>
        <p>Howdy! I'm Charles Pustejovsky and <strong>programming is my ikigai</strong></p>
        <hr />
        <p>
          An{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.forbes.com/sites/chrismyers/2018/02/23/how-to-find-your-ikigai-and-transform-your-outlook-on-life-and-business/#4bb1f0872ed4"
          >
            ikigai
          </a>{" "}
          is something you're passionate about, talented at, can have a career
          in, and can help the world with.
        </p>
        <p>
          I've loved learning as much as I can about computer science and
          JavaScript. I'm thankful that I've been able to{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://dev.to/cpustejovsky/a-month-of-development-work-52gh"
          >
            provide value to my former company with programming
          </a>
          . I'm hopeful that I'll be able to find a job where I provide value
          with programming full-time. Until then, I'll keep building{" "}
          <a href="#projects">projects</a> along the way.
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
