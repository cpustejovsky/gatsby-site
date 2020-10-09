import React, { useState } from "react"
import {
  Container,
  Switch,
  Collapse,
  FormControlLabel,
} from "@material-ui/core"
import projects from "../lists/projectlist"
import Project from "../Project"

export default function Projects() {
  const [checked, setChecked] = useState(false)

  let currentProjects = []
  let pastProjects = []

  projects.forEach(project => {
    const { name, title, languages, content, links, current } = project
    let projectComp = (
      <Project
        name={name}
        title={title}
        languages={languages}
        content={content}
        links={links}
      />
    )
    current
      ? (currentProjects = [...currentProjects, projectComp])
      : (pastProjects = [...pastProjects, projectComp])
  })

  return (
    <Container id="projects" className="site__section">
      <h1>Projects</h1>
      <FormControlLabel
        control={
          <Switch
            color="primary"
            checked={checked}
            onChange={() => {
              setChecked(!checked)
            }}
          />
        }
        label={checked ? "Hide Past Projects" : "Show Past Projects"}
      />
      <p>
        Here is a growing list of projects I'm working on or have worked on in
        the past <strong>(click for details)</strong>
      </p>
      <hr />
      {currentProjects}
      <Collapse in={checked}>{pastProjects}</Collapse>
    </Container>
  )
}
