import React from "react"
import Layout from "../components/layout.jsx"
import SEO from "../components/seo"
import Introduction from "../components/subpages/introduction"
import ReadingList from "../components/subpages/reading"
import About from "../components/subpages/about"
import Projects from "../components/subpages/projects"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <About />
    <Projects />
    <ReadingList />
  </Layout>
)

export default IndexPage
