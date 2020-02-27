import React from "react"
import Layout from "../components/layout.jsx"
import SEO from "../components/seo"
import Introduction from "../components/subpages/introduction"
import ReadingList from "../components/subpages/reading"
import About from "../components/subpages/about"
import Projects from "../components/subpages/projects"
//TODO: make use of gatsby-image https://www.gatsbyjs.org/packages/gatsby-image/
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
    <br/>
    <About />
    <br/>
    <Projects />
    <br/>
    <ReadingList />
    <br/>
  </Layout>
)

export default IndexPage
