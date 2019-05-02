import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentWrapper from "../components/contentWrapper"
import PostCard from "../components/postCard"

const BlogIndex = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const headerImage = data.pageImage.childImageSharp.fluid
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} homeNavText={siteTitle} title={`Blog`} headerImage={headerImage}>
      <SEO title="Blog" keywords={[`blog`, `kellen mace`]} />
      <ContentWrapper>
        {posts.map(({ node }) =>
          <PostCard node={node} key={node.fields.slug} />
        )}
      </ContentWrapper>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    pageImage: file(relativePath: { eq: "code-editor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
