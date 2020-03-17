import React from "react"
import Layout from "../components/layout.jsx"
import SEO from "../components/seo"
import Introduction from "../components/subpages/introduction"
import ReadingList from "../components/subpages/reading"
import About from "../components/subpages/about"
import Projects from "../components/subpages/projects"
import Resources from "../components/subpages/resources"
const IndexPage = () => (
  <Layout>
    <SEO title="Charles Pustejovsky | Full-Stack Developer" />
    <Introduction />
    <About />
    <Projects />
    <ReadingList />
    <Resources />
  </Layout>
)

export default IndexPage
