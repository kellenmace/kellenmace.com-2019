import React from "react"
import { Link } from "gatsby"
import styled from  "styled-components"
import Img from "gatsby-image"

import Nav from "../components/nav"

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

const StyledHeader = styled.header`
padding-top: 24px;
  padding-bottom: 48px;
  background: rgba(0,0,0,0.6);
  position: relative;
  z-index: 1;
  color: ${props => props.theme.white};
  text-shadow: 0 1px 4px rgb(0, 0, 0, 0.3);
  .container {
    width: ${props => props.theme.contentWidth};
    max-width: ${props => props.theme.contentMaxWidth};
    margin: ${props => props.theme.contentMargin};
  }
  a, a:hover, a:visited, a:link, a:active {
    color: ${props => props.theme.white};
    background-image: none;
    text-shadow: 0 1px 4px rgb(0, 0, 0, 0.3);
  }
  .bar {
    display: flex;
    margin-bottom: 168px;
    @media (max-width: 350px) { /* iPhone 5/SE */
      flex-direction: column;
    }
    @media (min-width: 768px) {
      margin-bottom: 240px;
    }
  }
  h3 {
    flex: 1;
    margin: 0;
    color: #fff;
    vertical-align: top;
    line-height: 25px;
  }
  .content {
    h1 {
      display: block;
      margin: 0;
      border-top: 4px solid;
      padding-top: 12px;
      color: ${props => props.theme.white};
    }
    span {
      display: block;
      text-transform: uppercase;
      margin-top: 5px;
      font-size: 14px;
      letter-spacing: 1px;
    }
  }
`

const header = props => {
    const { homeNavText, title, date, headerImage } = props

    return (
      <StyledHeader>
        {headerImage &&
          <BackgroundImg fluid={headerImage} />
        }
        <div className="container">
          <div className="bar">
            <h3>
              <Link to={`/`}>{homeNavText}</Link>
            </h3>
            <Nav />
          </div>

          <div className="content">
            <h1>{title}</h1>
            { date &&
              <span>{date}</span>
            }
          </div>
        </div>
      </StyledHeader>
    )
}

export default header
