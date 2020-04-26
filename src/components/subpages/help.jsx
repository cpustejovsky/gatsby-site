import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import FNV_EXP from "../images/fnv_exp"
const Introduction = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h2>Help Me Level Up my Development</h2>
        <FNV_EXP />
        <br></br>
        <p>
          Since I started looking for a development job, the main feedback I’ve
          received from the places I’ve applied to is that I don’t have the
          amount of experience they are looking for.
        </p>
        <p>
          Maybe it’s all the time I’ve spent playing RPGs, but whenever I see
          that reply, I think “Okay, now how do I make my experience go up? How
          do I level up as a developer?”
        </p>
        <p>
          <strong>
            {" "}
            I’m only going to level up by doing the work. By building projects.
            By contributing to larger projects. By learning more about the
            technologies I’m using and their underlying principles.
          </strong>
        </p>
        <p>
          I can build an app. I can make it work. However, because I care about
          writing quality code, questions arise:
          <ul>
            <li>Did I choose a good solution?</li>
            <li>Is the code elegant?</li>
            <li>Is it readable?</li>
            <li>Is it maintainable?</li>
            <li>Is the user experience solid?</li>
          </ul>
        </p>
        <p>
          <strong>This is where you can help, if you’re willing.</strong>
        </p>
        <p>
          If you have experience with CSS, React, NodeJS, or MongoDB, you can
          take a peek under the hood and see if you have any recommendations or
          critiques.
        </p>
        <p>
          If you have experience with design, you can take a tour of my app and
          see what could make for better UX.
        </p>
        <p>
          If you’re just an everyday person with no technical skills, great!
          That’s who I’m likely to be building apps for professionally so your
          thoughts are the most invaluable of all!
        </p>
        <p>
          The app in question is Estuary, a note taking app that I’m rebuilding
          into a productivity app that’ll help me be a more effective developer
          and a more effective person.
        </p>

        <a
          href="https://cpustejovsky-estuary.herokuapp.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button variant="success">Estuary</Button>
        </a>

        <a
          href="https://github.com/cpustejovsky/estuary"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button className="test" variant="outline-success">
            Source Code
          </Button>
        </a>
      </Col>

      <link
        href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
        rel="stylesheet"
        type="text/css"
      />

    </Row>
  </Container>
)

export default Introduction
