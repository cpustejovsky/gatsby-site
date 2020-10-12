import React, { useState } from "react"

import { Grid, Collapse } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  collapseHeader: {
    cursor: "pointer",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid black",
    marginTop: "1vh",
  },
  description: {
    padding: "1%",
  },
}))

type Links = {
  text: string,
  link: string
}

type Props = {
  name: string,
  title: string,
  languages: string,
  content: (string | JSX.Element)[],
  links: Links[],
}

export default function Project(props: Props) {
  const { name, title, languages, content, links } = props
  const [open, openCollapse] = useState(true)

  const classes = useStyles()

  return (<><div
    onClick={() => openCollapse(!open)}
    aria-controls={name}
    aria-expanded={open}
    className={classes.collapseHeader}
  >
    <h4>{title}</h4>
    <p>{languages}</p>
  </div>
    <Collapse in={open}>
      <Grid container id={name}>
        <Grid item md={12}>
          {content.map(text => (
            <p>{text}</p>
          ))}
          {links.map(cta => (
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
    </Collapse>
  </>
  )
}
