import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import ContentWrapper from "../components/contentWrapper"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const headerImage = data.pageImage.childImageSharp.fluid
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} homeNavText={siteTitle} title={`Blog`} headerImage={headerImage}>
      <SEO title="Blog" keywords={[`blog`, `kellen mace`]} />
      <ContentWrapper>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              {node.frontmatter.featuredImage &&
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
              }
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
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
