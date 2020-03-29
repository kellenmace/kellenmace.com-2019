import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"

import Header from "./header"

export const theme = {
  contentWidth: "92%",
  contentMaxWidth: "950px",
  contentMargin: "0 auto",
  contentPadding: "80px 0",
  borderRadius: "4px",
  mainTextColor: "rgba(0,0,0,0.8)",
  white: "#fff",
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
  ::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
  input[type="text"],
  input[type="email"],
  input[type="submit"],
  textarea {
    width: 100%;
    min-width: 100%
    margin-bottom: 10px;
    padding: 10px;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    background-color: rgb(221,221,221,0.7);
    color: ${props => props.theme.mainTextColor};
  }
  textarea {
    min-height: 250px;
  }
  input[type="submit"] {
    color: rgba(0,0,0,0.4);
    cursor: pointer;
    &:hover {
      color: rgba(0,0,0,0.6);
      background-color: rgb(221,221,221,0.9);
      &:after {
        content: "→";
      }
    }
  }
`

const Layout = props => {
  const {
    homeNavText,
    title,
    date,
    headerImage,
    headerOpacity,
    children,
  } = props

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div>
          <Header
            homeNavText={homeNavText}
            title={title}
            date={date}
            headerImage={headerImage}
            headerOpacity={headerOpacity}
          />
          <main>{children}</main>
        </div>
      </>
    </ThemeProvider>
  )
}

export default Layout
