import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import Fallout404 from "../components/images/fallout404"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container className="site site__404">
      <div>
        <h1 className="fallout">Page Not Found</h1>
        <Fallout404 />
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
