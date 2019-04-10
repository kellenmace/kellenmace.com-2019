import React from "react"
import { Link } from "gatsby"
import styled from  "styled-components"

import { rhythm, scale } from "../utils/typography"
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";

// backgroundImage: headerImage
const StyledHeader = styled.header`
  padding-bottom: 24px;
  background: #777;
  color: #fff;
  .container {
    width: ${props => props.theme.contentWidth};
    max-width: ${props => props.theme.contentMaxWidth};
    margin: ${props => props.theme.contentMargin};
  }
  .bar {
    display: flex;
    padding-top: 24px;
    padding-bottom: 24px;
    margin-bottom: 96px;
    border: 2px solid goldenrod;
  }
  h3 {
    flex: 1;
  }
  .nav {
    flex: 1;
    /* align-self: flex-end; */
    ul {
      list-style-type: none;
      text-align: center;
      text-align: right;
    }
    li {
      display: inline-block;
    }
    img {
      height: 30px;
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
`

const header = props => {
    const { siteTitle, title, date, headerImage } = props

    return (
      <StyledHeader>
        <div class="container">
          <div class="bar">
            <h3>
              <Link to={`/`}>{siteTitle}</Link>
            </h3>

            <div class="nav">
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

          <div class="content">
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
