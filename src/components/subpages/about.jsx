import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Cpustejovsky from "../images/cpustejovsky"
const About = () => (
  <Container id="about" className="site__section">
    <h1>About Me</h1>
    <Row>
      <Col md={12}>
        <Row>
          <Col md={6}  className="mx-auto">
            <Cpustejovsky/>
          </Col>
        </Row>
        <br />
        <p>
          I'm a perpetual learner. I love learning new things and exploring new
          ideas. I never get bored even when reading a SCOTUS statement or an
          academic essay on grain shipments or the most dry technical
          documentation.
        </p>
        <p>
          One of the things I love most about programming is that it forces me
          to
          <strong>learn by doing</strong>. I can't just read about programming,
          I have to program. It takes me out of my comfort zone in the most
          delightful way. Programming helps me fail fast and learn and grow from
          those mistakes.
        </p>
        <p>
          <strong>
            I'm not scared of asking stupid questions and showing that I don't
            know it all because that's the only way I'll grow, both as a person
            and as a developer.
          </strong>
        </p>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col md={6}>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (Intermediate)</li>
          <li>NodeJS</li>
          <li>MongoDB</li>
          <li>CSS</li>
          <li>Git</li>
          <li>Golang (Beginner)</li>
          <li>Python (Beginner)</li>
        </ul>
      </Col>
      <Col md={6}>
        <h2>Interests</h2>
        <ul>
          <li>Cryptocurrency</li>
          <li>Cybersecurity</li>
          <li>Functional Programming</li>
          <li>Hacking Productivity</li>
          <li>Classics (Greco-Roman)</li>
          <li>Tolkien, Science Fiction, and Fantasy</li>
          <li>Hiking</li>
        </ul>
      </Col>
    </Row>
  </Container>
)

export default About