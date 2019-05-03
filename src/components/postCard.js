import React from "react"
import { Link, } from "gatsby"
import Img from "gatsby-image"

const PostCard = ({node}) => (
  <div key={node.fields.slug}>
    {node.frontmatter.featuredImage &&
      <Link to={node.fields.slug}>
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
      </Link>
    }
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
)

export default PostCard
