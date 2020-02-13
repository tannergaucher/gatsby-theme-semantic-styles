import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sign.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{ margin: `var(--space-md) 0` }}
    />
  )
}

export default Image
