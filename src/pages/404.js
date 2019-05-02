import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentWrapper from "../components/contentWrapper"
import Emoji from "../components/emoji"

const NotFoundPage = props => (
  <Layout
    location={props.location}
    homeNavText={props.data.site.siteMetadata.title}
    title={`Not Found`}
  >
    <SEO title={`404: Not Found`} />
    <ContentWrapper>
      <p>
        <Emoji symbol={`🤷🏻‍♂️`} label={`Man shrugging`} />
        {` `}Sorry – this page doesn&#39;t exist.
      </p>
    </ContentWrapper>
  </Layout>
)

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
