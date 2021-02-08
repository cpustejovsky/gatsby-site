import React from "react"
import { Container, Grid, Button } from "@material-ui/core"
import Ikigai from "../images/ikigai"
import Resume from "../docs/Cpustejovsky_Resume.pdf"
const Introduction = () => (
  <Container>
    <Grid container className="introduction">
      <Grid item xs={12} sm={6}>
        <Ikigai />
      </Grid>
      <Grid item xs={12} sm={6}>
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
          is where your passion, career path, talents, and ability to provide
          value meet.
        </p>
        {/* TODO: add blog post story */}
        <p>
          Programming is my ikigai. That's why I always seek to learned and grow to better provide value with code. 
        </p>
        <hr />
        <div>
          <a href={Resume}>
            <Button variant="contained" color="primary">
              Resume
            </Button>
          </a>
        </div>
      </Grid>
    </Grid>
  </Container>
)

export default Introduction
