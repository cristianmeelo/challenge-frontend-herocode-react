import { Global, Interpolation, Theme } from '@emotion/react'

const styles: Interpolation<Theme> = (theme) => {
  return {
    '*, *::before, *::after': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: '100%',
      fontFamily: theme.fonts.body,
      verticalAlign: 'baseline',
    },
    'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
      display: 'block',
    },
    body: {
      lineHeight: 1,
    },
    'ol, ul': {
      listStyle: 'none',
    },
    'blockquote, q': {
      quotes: 'none',
    },
    table: {
      borderCollapse: 'collapse',
      borderSpacing: 0,
    },
  }
}

export const Styles = () => {
  return <Global styles={styles} />
}
