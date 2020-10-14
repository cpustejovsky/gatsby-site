import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography } from "@material-ui/core"
import Fallout404 from "../components/images/fallout404"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container className="site site__404">
      <div>
        <Typography variant="h1">Page Not Found</Typography>
        <Fallout404 />
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
