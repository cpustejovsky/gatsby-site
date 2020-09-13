import React from "react"

import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  description: {
    paddingLeft: "2%",
  },
}))

//TODO: sort out duplicate type declaration between books and Book
type CTA = {
  text: string,
  link: string
}

type Props = {
  Img: () => JSX.Element,
  title: string,
  textArr: (string | JSX.Element)[],
  ctaArr: CTA[],
}

export default function Book(props: Props) {
  const { Img, title, textArr, ctaArr } = props
  const classes = useStyles()

  return (
    <>
      <Grid container>
        <Grid
          item
          md={4}
          style={{ boxShadow: "1px 0px 10px 1px rgba(0, 0, 0, .5)" }}
        >
          <a target="_blank" rel="noreferrer noopener" href={ctaArr[0].link}>
            <Img />
          </a>
        </Grid>
        <Grid item md={8} className={classes.description}>
          <Typography variant="h6">{title}</Typography>
          {textArr.map(text => (
            <p>{text}</p>
          ))}
          {ctaArr.map(cta => (
            <p>
              <strong>
                <a target="_blank" rel="noreferrer noopener" href={cta.link}>
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
