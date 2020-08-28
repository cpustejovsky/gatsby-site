import React from "react"
import Layout from "../components/layout.jsx"
import SEO from "../components/seo"
import Resources from "../components/subpages/resources"
const ResourcesPage = () => {
    return (
      <Layout>
        <SEO title="Resources | cpustejovsky" />
        <div className="site">
          <main className="site__landing">
            <Resources />
            <footer className="site__footer">
              Cpustejovsky <i className="far fa-thumbs-up"></i>,{" "}
              {new Date().getFullYear()}
            </footer>
          </main>
        </div>
      </Layout>
    )
  
}
export default ResourcesPage