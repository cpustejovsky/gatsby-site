import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Resources from "../components/subpages/resources"
const ResourcesPage = () => {
    return (
      <Layout>
        <SEO title="Resources | cpustejovsky" />
        <div className="site">
          <main className="site__landing">
            <Resources />
          </main>
        </div>
      </Layout>
    )
  
}
export default ResourcesPage