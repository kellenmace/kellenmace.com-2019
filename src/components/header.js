import React from "react"
import { Link } from "gatsby"
import styled from  "styled-components"
import Img from "gatsby-image"

import { rhythm, scale } from "../utils/typography"
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";

const BackgroundImg = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%;

  /* Adjust image positioning (if image covers area with defined height) */
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
  }
`

// backgroundImage: headerImage
const StyledHeader = styled.header`
  padding-bottom: 24px;
  background: rgba(0,0,0,0.6);
  color: #fff;
  position: relative;
  z-index: 1;
  .container {
    width: ${props => props.theme.contentWidth};
    max-width: ${props => props.theme.contentMaxWidth};
    margin: ${props => props.theme.contentMargin};
  }
  a, a:hover, a:visited, a:link, a:active {
    text-decoration: none;
    box-shadow: none;
  }
  .bar {
    display: flex;
    padding-top: 24px;
    padding-bottom: 24px;
    margin-bottom: 96px;
  }
  h3 {
    flex: 1;
    margin: 0;
    color: #fff;
    vertical-align: top;
    line-height: 25px;
  }
  .nav {
    flex: 1;
    /* align-self: flex-end; */
    ul {
      list-style-type: none;
      text-align: center;
      text-align: right;
      margin-bottom: 0;
    }
    li {
      display: inline-block;
      margin-bottom: 0;
      vertical-align: top;
      a {
        line-height: 25px;
      }
    }
    li:not(:last-child) {
      margin-right: 15px;
    }
    img {
      height: 25px;
      width: auto;
    }
  }
  .content {
    h1 {
      border-top: 4px solid;
      padding-top: 12px;
      /* letter-spacing: -2px; */
    }
    span {
      text-transform: uppercase;
      margin-top: 5px;
      letter-spacing: 1px;
      /* line-height: 1.1em; */
      /* font-family: "Source Sans Pro"; */
    }
  }
  @media (min-width: 768px) {

  }
`

const header = props => {
    const { siteTitle, title, date, headerImage } = props

    return (
      <StyledHeader>
        {headerImage &&
          <BackgroundImg fluid={headerImage} />
        }
        <div className="container">
          <div className="bar">
            <h3>
              <Link to={`/`}>{siteTitle}</Link>
            </h3>

            <div className="nav">
              <ul>
                  <li>
                    <Link to={`/about`}>About</Link>
                  </li>
                  <li>
                    <a href={`https://github.com/kellenmace`}>
                    <img src={github} alt="GitHub" />
                    </a>
                  </li>
                  <li>
                    <a href={`https://twitter.com/kellenmace`}>
                    <img src={twitter} alt="Twitter" />
                    </a>
                  </li>
              </ul>
            </div>
          </div>

          <div className="content">
            <h1>{title}</h1>
            { date &&
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-1),
                }}
              >
                {date}
              </p>
            }
          </div>
        </div>
      </StyledHeader>
    )
}

export default header
