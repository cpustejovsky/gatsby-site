import React, { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import Header from "../components/header.jsx"
import SEO from "../components/seo"
import ARCHIVIST from "../components/images/archivist"
import axios from "axios"
import parse from "html-react-parser"
const Resources = () => {
  const [data, setData] = useState("")

  useEffect(async () => {
    let post = await axios.get(`https://dev.to/api/articles/281175`)
    let data = post.data.body_html
    setData(data)
  }, [])

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
            {parse(data)}
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
