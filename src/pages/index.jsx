import React from "react"
import Layout from "../components/layout.jsx"
import SEO from "../components/seo"
import Introduction from "../components/subpages/introduction"
//TODO: make use of gatsby-image https://www.gatsbyjs.org/packages/gatsby-image/
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
  </Layout>
)

export default IndexPage
