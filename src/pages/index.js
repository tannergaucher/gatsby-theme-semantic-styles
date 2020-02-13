import { Image, Layout, SEO } from "../components"

import React from "react"
import { useSiteMetadata } from "../hooks"

const IndexPage = ({ location }) => {
  const { description } = useSiteMetadata()

  return (
    <Layout location={location}>
      <article className="padding page container center">
        <SEO title="Home" />
        <h1>{description}</h1>
        <p>
          Responsive typography and spacing, adjustable vertical rhythm,
          responsive light / dark color themes. Customize and style inline with
          CSS variables.
        </p>
        <Image />
        <hr />
      </article>
    </Layout>
  )
}

export default IndexPage
