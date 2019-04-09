import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from  "styled-components"
import styledNormalize from "styled-normalize"

// import { rhythm, scale } from "../utils/typography"
import Header from "./header"

export const theme = {
  borderRadius: '10px'
}

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    background: #efefef;
  }
`

const Layout = props => {
    const { location, siteTitle, title, date, headerImage, children } = props

    // If homepage
    const rootPath = `${__PATH_PREFIX__}/`
    if (location.pathname === rootPath) {
    } else {
    }

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <div>
            <Header siteTitle={siteTitle} title={title} date={date} headerImage={headerImage} />
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()} Kellen Mace
            </footer>
          </div>
        </>
      </ThemeProvider>
    )
}

export default Layout
