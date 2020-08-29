import React, { useState } from "react"
import { Container, Grid, Collapse } from "@material-ui/core"
import Cpustejovsky from "../images/cpustejovsky"
const About = () => {
  const [skills, openSkills] = useState(false)
  const [interests, openInterests] = useState(false)
  return (
    <Container id="about" className="site__section">
      <h1>About Me</h1>
      <Grid container>
        <Grid item md={12}>
          <Grid container>
            <Grid item md={6} className="mx-auto">
              <Cpustejovsky />
            </Grid>
          </Grid>
          <br />
          <p>I'm Charles Pustejovsky.</p>
          <p>
            I love learning and never get bored whether I'm reading a SCOTUS
            statement or an essay on grain shipments or the most dry technical
            documentation. Of course, I can't learn programming just by reading
            about it (<strong>I tried!</strong>).
          </p>
          <p>
            Instead, I needed to
            <strong> learn by doing</strong> which took me out of my comfort
            zone, helped me stop procrastinating, and learn to fail fast and use
            those failures to grow.
          </p>
          <p>
            <strong>
              This helped me ask more question evan at the risk of "looking
              stupid" because that's the only way I'll grow.
            </strong>
          </p>
        </Grid>
      </Grid>
      <hr />
      <Grid container>
        <Grid item xs={12} md={6}>
          <div
            onClick={() => openSkills(!skills)}
            className="projects__collapse-header"
          >
            <h4>Skills</h4>
          </div>
          <Collapse in={skills}>
            <ul>
              <li>Golang</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>React/Redux</li>
              <li>GatsbyJS</li>
              <li>VueJS</li>
              <li>Nuxt.js</li>
              <li>CSS</li>
              <li>Git</li>
              <li>Python (Beginner)</li>
              <li>Django (Beginner)</li>
              <li>PostgreSQL (Beginner)</li>
            </ul>
          </Collapse>
        </Grid>
        <Grid item xs={12} md={6}>
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
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
