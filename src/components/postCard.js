import React from "react"
import { Link, } from "gatsby"
import Img from "gatsby-image"
import styled from  "styled-components"

const StyledPostCard = styled.div`
  flex: 1 1 calc(100% - 1.5rem);
  @media (min-width: 620px) {
    flex: 0 1 calc(50% - 1.5rem);
  }
  @media (min-width: 946px) {
    flex: 0 1 calc(33.33% - 1.5rem);
  }
  margin: 0.75rem;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.white};
  overflow: hidden;
  .content {
    padding: 1rem;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  a {
    background-image: none;
  }
  small {
    display: block;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 0;
  }
`

const PostCard = ({node}) => (
  <StyledPostCard>
    {node.frontmatter.featuredImage &&
      <Link to={node.fields.slug}>
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
      </Link>
    }
    <div className="content">
      <h3>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
      </h3>
      <small>{node.frontmatter.date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  </StyledPostCard>
)

export default PostCard
