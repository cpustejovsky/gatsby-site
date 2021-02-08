import React, { useState } from "react"
import { Container, Grid, Collapse } from "@material-ui/core"
import Cpustejovsky from "../images/cpustejovsky"
import CpustejovskyGopher from "../images/cpustejovskyGopher"
const About = () => {
  const [skills, openSkills] = useState<boolean>(true)
  const [interests, openInterests] = useState<boolean>(true)
  return (
    <Container id="about" className="site__section">
      <h1>About Me</h1>
      <Grid container>
        <Grid item md={12}>
          <Grid container md={8}>
            <p>I'm Charles Pustejovsky.</p>
            <p>
              Some things you're good at. Some things are good for you. For me, programming is both.
            </p>
            <p>
              That's why I love programming and why I always seek to provide value with it.
            </p>
            <p>
              It's why I love Go, Test-Driven Development, and SDLC methodologies (Agile/Scrum/Kanban).
            </p>
            <p>
              They are all tools that help me provide value to my team and help the software we write provide value to users.
            </p>
          </Grid>
          <Grid container justify="center" alignItems="flex-end">
            <Grid item xs={4}>
              <CpustejovskyGopher />
            </Grid>
            <Grid item xs={6}>
              <Cpustejovsky />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
              <li>Go</li>
              <li>SQL</li>
              <li>DynamoDB</li>
              <li>NodeJS</li>
              <li>TypeScript</li>
              <li>React/Redux</li>
              <li>MongoDB</li>
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
              <li>Classics (Greco-Roman)</li>
              <li>Science Fiction and Fantasy</li>
              <li>Philosophy</li>
            </ul>
          </Collapse>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
