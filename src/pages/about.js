import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentWrapper from "../components/contentWrapper"

const AboutPage = props => (
  <Layout location={props.location} homeNavText={`← Blog`} title={`About`}>
    <SEO title={`About – ${props.data.site.siteMetadata.title}`} />
    <ContentWrapper>
      <p>About page.</p>
    </ContentWrapper>
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
