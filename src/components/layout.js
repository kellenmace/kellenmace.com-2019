import React from "react"
import { createGlobalStyle, ThemeProvider } from  "styled-components"
import styledNormalize from "styled-normalize"

// import { rhythm, scale } from "../utils/typography"
import Header from "./header"

export const theme = {
  contentWidth: '92%',
  contentMaxWidth: '1000px',
  contentMargin: '0 auto',
  contentPadding: '80px 0',
  borderRadius: '10px'
}

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  html, body {
    background: #efefef;
  }
`

const Layout = props => {
    const { homeNavText, title, date, headerImage, children } = props

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <div>
            <Header homeNavText={homeNavText} title={title} date={date} headerImage={headerImage} />
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
