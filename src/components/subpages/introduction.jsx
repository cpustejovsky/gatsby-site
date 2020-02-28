import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Ikigai from "../images/ikigai"
import Resume from "../docs/Cpustejovsky_Resume.pdf"
import { Link } from "gatsby"
const Introduction = () => (
  <Container>
    <Row>
      <Col lg={6}>
        <Ikigai />
      </Col>
      <Col lg={6}>
        <h3>Howdy!</h3>
        <p>
          I'm Charles Pustejovsky. I'm working to align my career path with my
          <strong> ikigai</strong>. Ikigai is something you're passionate about,
          talented at, can have a career in, and can help the world with.
        </p>
        <p>
          After years of searching and learning,
          <strong>
            <Link to="https://medium.com/@cpustejovsky/do-what-you-love-445711971a3">
              I realized my ikigai is programming.
            </Link>
          </strong>
          Since then I've been learning as much as I can about computer science,
          JavaScript, and how to use code to create things that help myself and
          others.
        </p>
        <p>
          I'm a self-taught software engineer looking for a{" "}
          <strong>full-stack</strong> or <strong>back-end</strong> developer
          role to put my passion and skills to work.
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
