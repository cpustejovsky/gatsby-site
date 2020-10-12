import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ARCHIVIST = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "archivist.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default ARCHIVIST
