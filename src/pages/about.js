import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentWrapper from "../components/contentWrapper"
import Emoji from "../components/emoji"

const AboutPage = props => (
  <Layout
    location={props.location}
    homeNavText={`← Blog`}
    title={`About`}
    headerImage={props.data.pageImage.childImageSharp.fluid}
  >
    <SEO title={`About – ${props.data.site.siteMetadata.title}`} />
    <ContentWrapper>
      <h1>
        <Emoji symbol="👋🏼" label="Waving hand" />
      </h1>
      <p>
        Kellen Mace is a web developer based in Rochester Hills, MI who works on
        these things:
      </p>
      <ul>
        <li>
          Runs the{" "}
          <a href="https://www.youtube.com/user/kellenmace">
            Headless WP Rocks
          </a>{" "}
          YouTube channel, teaching folks how to build amazing modern JavaScript
          apps powered by headless WordPress backends
        </li>
        <li>
          Tweets about headless WordPress, React and GraphQL on Twitter:{" "}
          <a href="https://twitter.com/kellenmace">@kellenmace</a>
        </li>
        <li>
          Senior Software Engineer at <a href="https://finder.com/">Finder</a>
        </li>
        <li>
          Creator of{" "}
          <a href="https://github.com/harness-software/wp-graphql-gravity-forms">
            WPGraphQL for Gravity Forms
          </a>
        </li>
        <li>
          Creator of{" "}
          <a href="https://github.com/harness-software/wp-graphql-posts-to-posts">
            WPGraphQL for Posts 2 Posts
          </a>
        </li>
        <li>
          Contributor to <a href="https://www.wpgraphql.com/">WPGraphQL</a>
        </li>
        <li>
          Creator of the{" "}
          <a href="https://chrome.google.com/webstore/detail/wordpress-admin-switcher/pgjihalgddfomcjjpiafhppegjajpkac">
            WordPress Admin Switcher
          </a>{" "}
          Google Chrome extension
        </li>
        <li>Into headless WordPress, React & GraphQL</li>
      </ul>
      <p>
        I was born in Toronto, then raised in the Metro Detroit area through
        high school. College at Grand Valley State took me to West Michigan,
        where I got to know several of my close friends. Shortly after college,
        I married my high school sweetheart, Meghan Ann Mace. We had all kinds
        of adventures living in West Michigan and Denver, Colorado and traveling
        to interesting places. Eventually, we traced out roots back home and
        settled in beautiful Rochester Hills. We're followers of Christ, and are
        active in our church. We're very blessed to have two boys to call our
        own: Desmond James Mace and Emmett Reid Mace. When not slinging code, I
        love to spend time with my family and make music on guitars, drums,
        keyboards and in digital audio workstations like Reason and Logic Pro. I
        also like to read quite a lot about technology, faith nutrition,
        science, entrepreneurship and productivity, with some fiction thrown
        into the mix to spice things up. Lastly, I’m a huge fan of the open
        source software community that I'm privileged to be a part of.
      </p>
      <p>
        You can get in touch with me{" "}
        <a href="https://twitter.com/kellenmace">on Twitter</a>, or by email at
        kellen.mace(at)gmail.com.
      </p>
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
    pageImage: file(relativePath: { eq: "family.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
