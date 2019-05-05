import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentWrapper from "../components/contentWrapper"
import PostCard from "../components/postCard"

const PostsGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
`

const BlogIndex = props => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  const headerImage = data.pageImage.childImageSharp.fluid
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} homeNavText={siteTitle} title={`Blog`} headerImage={headerImage}>
      <SEO title="Blog" keywords={[`blog`, `kellen mace`]} />
      <ContentWrapper>
        <PostsGridContainer>
          {posts.map(({ node }) =>
            <PostCard node={node} key={node.fields.slug} />
          )}
        </PostsGridContainer>
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
