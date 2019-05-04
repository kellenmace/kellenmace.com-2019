import Typography from "typography"
import elkGlenTheme from "typography-theme-elk-glen"

// Customizations to the Elk Glen theme.
elkGlenTheme.scaleRatio = 2.85
elkGlenTheme.googleFonts = [
  {
    name: 'Lobster',
    styles: ['400'],
  },
]
elkGlenTheme.headerFontFamily = ['Lobster', 'serif']
elkGlenTheme.bodyFontFamily = ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
elkGlenTheme.headerWeight = '400'
elkGlenTheme.overrideThemeStyles = () => {
  return {
    "a": {
      textShadow: `none`,
    },
    ".gatsby-resp-image-link": {
      backgroundImage: `none`,
    },
  }
}

const typography = new Typography(elkGlenTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
