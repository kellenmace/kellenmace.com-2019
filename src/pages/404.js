import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ContentWrapper from "../components/contentWrapper"
import SEO from "../components/seo"
import Emoji from "../components/emoji"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} homeNavText={siteTitle} title={`Not Found`}>
        <SEO title={`404: Not Found`} />
        <ContentWrapper>
          <p>
            <Emoji symbol={`🤷🏻‍♂️`} label={`Man shrugging`} />
            {` `}Sorry – this page doesn&#39;t exist.
          </p>
        </ContentWrapper>
      </Layout>
    )
  }
}

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
