import React from "react"
import { Link } from "gatsby"
import styled from  "styled-components"

import github from "../images/github.svg"
import twitter from "../images/twitter.svg"

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
    img {
      height: 25px;
      width: auto;
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
              <img src={github} alt="GitHub" />
            </a>
          </li>
          <li>
            <a href={`https://twitter.com/kellenmace`} title={`Twitter`} alt={`Twitter`}>
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
    </StyledNav>
  )
}

export default Nav
