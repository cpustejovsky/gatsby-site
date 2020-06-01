import React, { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import Header from "../components/header.jsx"
import SEO from "../components/seo"
import ARCHIVIST from "../components/images/archivist"
import axios from "axios"
import parse from "html-react-parser"
import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/layout.scss"
import "../scss/custom-bootstrap.scss"
const Resources = () => {
  const [apiData, setApiData] = useState("")
  const fetchApiData = async () => {
    let post = await axios.get(`https://dev.to/api/articles/281175`)
    setApiData(parse(post.data.body_html))
  }
  const getDataLength = data => data.length
  console.log(apiData.length)
  useEffect(() => {
    fetchApiData()
  }, [getDataLength(apiData)])
  const renderData = data => {
    if (data) {
      return data
    } else {
      return "Loading..."
    }
  }
  return (
    <>
      <SEO title="Resources | Cpustejovsky" />
      <Header />
      <div className="site">
        <main className="site__landing">
          <Container>
            <h1>Resources</h1>
            <ARCHIVIST />
            <br></br>
            {renderData(apiData)}
            <hr />
            <p>
              Resources are hosted on{" "}
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://dev.to/"
              >
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
          <footer className="site__footer">
            Cpustejovsky <i className="far fa-thumbs-up"></i>,{" "}
            {new Date().getFullYear()}
          </footer>
        </main>
      </div>
    </>
  )
}
export default Resources
