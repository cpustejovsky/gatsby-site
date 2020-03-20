import React, { useState } from "react"
import { Container, Row, Col, Collapse } from "react-bootstrap"
import Cpustejovsky from "../images/cpustejovsky"
const About = () => {
  const [skills, openSkills] = useState(false)
  const [interests, openInterests] = useState(false)
  return (
    <Container id="about" className="site__section">
      <h1>About Me</h1>
      <Row>
        <Col md={12}>
          <Row>
            <Col md={6} className="mx-auto">
              <Cpustejovsky />
            </Col>
          </Row>
          <br />
          <p>My name is Charles Pustejovsky.</p>
          <p>
            I'm a perpetual learner. I never get bored even when reading a SCOTUS statement or
            an academic essay on grain shipments or the most dry technical
            documentation.
          </p>
          <p>
            One of the things I love most about programming is that it forces me
            to
            <strong> learn by doing</strong>. I can't just read about
            programming, I have to program. It takes me out of my comfort zone
            in the most delightful way. Programming helps me fail fast and learn
            and grow from those mistakes.
          </p>
          <p>
            <strong>
              I'm no longer scared of asking stupid questions and showing that I
              don't know it all because that's the only way I'll grow, both as a
              person and as a developer.
            </strong>
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={12}>
          <div
            onClick={() => openSkills(!skills)}
            className="projects__collapse-header"
          >
            <h4>Skills</h4>
          </div>
          <Collapse in={skills}>
            <ul>
              <li>JavaScript</li>
              <li>React/Redux</li>
              <li>GatsbyJS</li>
              <li>VueJS</li>
              <li>Nuxt.js</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>CSS</li>
              <li>Git</li>
              <li>Golang (Beginner)</li>
              <li>Python (Beginner)</li>
            </ul>
          </Collapse>
        </Col>
        <Col md={12}>
          <div
            onClick={() => openInterests(!interests)}
            className="projects__collapse-header"
          >
            <h4>Interests</h4>
          </div>
          <Collapse in={interests}>
            <ul>
              <li>Cybersecurity</li>
              <li>Functional Programming</li>
              <li>Hacking Productivity</li>
              <li>Accessibility in Design</li>
              <li>Classics (Greco-Roman)</li>
              <li>Science Fiction and Fantasy</li>
              <li>Philosophy</li>
              <li>Baking</li>
            </ul>
          </Collapse>
        </Col>
      </Row>
    </Container>
  )
}

export default About
