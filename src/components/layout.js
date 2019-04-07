import React from "react"

import "./layout.css"
import { rhythm, scale } from "../utils/typography"
import Header from "./header"

const Layout = props => {
    const { location, siteTitle, title, date, children } = props

    // If homepage
    const rootPath = `${__PATH_PREFIX__}/`
    if (location.pathname === rootPath) {
    } else {
    }

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header siteTitle={siteTitle} title={title} date={date}/>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} Kellen Mace
        </footer>
      </div>
    )
}

export default Layout
