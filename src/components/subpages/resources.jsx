import React, { useState, useEffect } from "react"
import { Container, Button } from "react-bootstrap"
import ARCHIVIST from "../images/archivist"
import axios from "axios"
import parse from "html-react-parser"
const Resources = () => {
  const [apiData, setApiData] = useState(
    `<p>Page not working. Resource page can be found <a rel="noreferrer noopener" target="_blank" href="https:dev.to/cpustejovsky/resources-2igo">here</a></p>`
  )
  const fetchApiData = async() => {
    let res = await axios.get("https://dev.to/api/articles/281175")
    setApiData(res.data.body_html)
  }

  useEffect(() => {
    fetchApiData()
  }, [])

  // const [starsCount, setStarsCount] = useState(0)
  // useEffect(() => {
  //   // get data from GitHub api
  //   fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
  //     .then(response => response.json()) // parse JSON from request
  //     .then(resultData => {
  //       setStarsCount(resultData.stargazers_count)
  //     }) // set data for the number of stars
  // }, [])


  return (
    <Container>
      <h1>Resources</h1>
      <ARCHIVIST />
      <br></br>
      {/* <strong>Test:</strong> {starsCount ? "Passing" : "Failing"} */}
      <Button onClick={()=>fetchApiData()}>Refetch API Data</Button>
      {parse(apiData)}
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
