import React, { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import ARCHIVIST from "../images/archivist"
import axios from "axios"
import parse from "html-react-parser"
const Resources = () => {
  const [apiData, setApiData] = useState(
    <p>
      Page not working. Resource page can be found{" "}
      <a
        rel="noreferrer noopener"
        target="_blank"
        href="https:dev.to/cpustejovsky/resources-2igo"
      >
        here
      </a>
    </p>
  )
  const fetchApiResources = async () => {
    let post = await axios.get(`https://dev.to/api/articles/281175`)
    setApiData(parse(post.data.body_html))
  }
  useEffect(() => {
    fetch("https://dev.to/api/articles/281175")
      .then(res => res.json())
      .then(data => {
        setApiData(parse(data.body_html))
      })
  }, [])
  return (
    <Container>
      <h1>Resources</h1>
      <ARCHIVIST />
      <br></br>
      {apiData}
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
