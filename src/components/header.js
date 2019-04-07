import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";

const header = props => {
    const { siteTitle, title, date } = props

    return (
      <header>
        <h3>
          <Link to={`/`}>{siteTitle}</Link>
        </h3>

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
      </header>
    )
}

export default header
