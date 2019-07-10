import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ContentWrapper from "../components/contentWrapper"
import Bio from "../components/bio"
import Ad from "../components/ad"
import Comments from "../components/comments"
// import CommentForm from "../components/commentForm"
import { rhythm } from "../utils/typography"

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext
  // const comments = props.data.allCommentsYaml && props.data.allCommentsYaml.edges
  const comments = []

  return (
    <Layout
      location={props.location}
      homeNavText={`← Blog`}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      headerImage={post.frontmatter.featuredImage ? post.frontmatter.featuredImage.childImageSharp.fluid : ``}
      headerOpacity={post.frontmatter.headerOpacity || ``}
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <ContentWrapper>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
        <Ad />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        {comments && comments.length ?
          <Comments comments={comments} /> : null
        }
        {/* <CommentForm pageContext={props.pageContext} /> */}
      </ContentWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headerOpacity
      }
    }
  }
`

/*

    allCommentsYaml(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          name
          email
          message
          date
        }
      }
    }

*/



/*

    allSlugYaml(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          name
          email
          message
          date
        }
      }
    }

*/