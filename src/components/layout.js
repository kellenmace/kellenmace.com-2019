import React from "react"
import { createGlobalStyle, ThemeProvider } from  "styled-components"

import Header from "./header"
import Footer from "./footer"

export const theme = {
  contentWidth: '92%',
  contentMaxWidth: '950px',
  contentMargin: '0 auto',
  contentPadding: '80px 0',
  borderRadius: '4px',
  white: '#fff',
}

const GlobalStyle = createGlobalStyle`
  html, body {
    background: #efefef;
  }
  code {
    background: rgb(221,221,221,0.7);
    padding: .1rem .3rem .2rem;
    border-radius: ${props => props.theme.borderRadius};
  }
  /*
  TODO: style form fields
  Example: https://css-tricks.com/making-web-components-for-different-contexts/
  color to use: rgb(221,221,221,0.7); */
  input[type="text"],
  input[type="email"],
  input[type="submit"],
  textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    /* background-color: rgb(221,221,221,0.7); */
    background-color: #ccc;
  }
  textarea {
    min-height: 250px;
  }
  /* ::placeholder {
    color: red;
  } */
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
            <Footer />
          </div>
        </>
      </ThemeProvider>
    )
}

export default Layout
