import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ContentWrapper from "../components/contentWrapper"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} homeNavText={`← Blog`} title={`About`}>
        <SEO title={`About – ${siteTitle}`} />
        <ContentWrapper>
          <p>About page.</p>
        </ContentWrapper>
      </Layout>
    )
  }
}

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
