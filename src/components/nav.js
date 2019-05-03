import React from "react"
import { Link } from "gatsby"
import styled from  "styled-components"

import GitHubIcon from "./gitHubIcon"
import TwitterIcon from "./twitterIcon"

const StyledNav = styled.div`
  .nav {
    flex: 1;
    ul {
      @media (max-width: 350px) { /* iPhone 5/SE */
        text-align: left;
        margin-left: 0;
        padding-top: 15px;
      }
      list-style-type: none;
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
    svg {
      height: 25px;
      width: auto;
      fill: ${props => props.theme.white};
    }
  }
`

const Nav = () => {
  // TODO: Maybe use Gatsby Image for the SVGs below.
  return (
    <StyledNav>
      <div className="nav">
        <ul>
          <li>
            <Link to={`/about`} title={`About`} alt={`About`}>About</Link>
          </li>
          <li>
            <a href={`https://github.com/kellenmace`} title={`GitHub`} alt={`GitHub`}>
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href={`https://twitter.com/kellenmace`} title={`Twitter`} alt={`Twitter`}>
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
    </StyledNav>
  )
}

export default Nav
