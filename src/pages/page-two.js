import { Image, Layout, SEO } from "../components"

import React from "react"

const PageTwo = ({ location }) => (
  <Layout location={location}>
    <SEO title="Page Two" />
    <article className="page">
      <div className="image-grid">
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
    </article>
  </Layout>
)

export default PageTwo
