import React from "react"

import { Grid, Typography } from "@material-ui/core"

export default function Book(props) {
  const { BookIMG, title, textArr, ctaArr, classes } = props
  return (
    <>
      <Grid container>
        <Grid item md={4}>
          <BookIMG />
        </Grid>
        <Grid item md={8} className={classes.description}>
          <Typography variant="h6">{title}</Typography>
          {textArr.map(text => (
            <p>{text}</p>
          ))}
          {ctaArr.map(cta => (
            <p>
              <strong>
                <a rel="noreferrer noopener" href={cta.link}>
                  {cta.text}
                </a>
              </strong>
            </p>
          ))}
        </Grid>
      </Grid>
      <br />
    </>
  )
}
