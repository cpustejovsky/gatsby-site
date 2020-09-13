import React, { useState, useEffect } from "react"
import { Container, CircularProgress } from "@material-ui/core"
import ARCHIVIST from "../images/archivist"
import axios from "axios"
import parse from "html-react-parser"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  devto: {
    '& img': {
      maxWidth: "100%"
    },
  },
  spinnerContainer: {
    width: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
  },
}))

const Resources = () => {
  const classes = useStyles()
  const [apiData, setApiData] = useState(false)
  const fetchApiData = async () => {
    let res = await axios.get("https://dev.to/api/articles/281175")
    setApiData(parse(res.data.body_html))
  }

  useEffect(() => {
    fetchApiData()
  }, [])
  const loadSpinner = () => {
    return (
      <>
        <div className={classes.spinnerContainer}>
          <CircularProgress style={{ width: "5rem", height: "5rem" }} />
          <br />
          <p>
            Resources not loading. Enable JavaScript to fix or visit the
            resource page which can be found{" "}
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://dev.to/cpustejovsky/resources-2igo"
            >
              here
            </a>
          </p>
        </div>
      </>
    )
  }
  return (
    <Container>
      <h1>Resources</h1>
      <ARCHIVIST />
      <br></br>
      <div className={classes.devto}>{apiData ? apiData : loadSpinner()}</div>
      <hr />
      <p>
        Resources are hosted on{" "}
        <a rel="noreferrer noopener" target="_blank" href="https://dev.to/">
          DEV.to
        </a>{" "}
        and fetched using the{" "}
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://docs.dev.to/api/"
        >
          DEV Community API
        </a>
        .
      </p>
    </Container>
  )
}
export default Resources
