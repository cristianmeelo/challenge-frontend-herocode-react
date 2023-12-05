import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    primary: {
      purple_200: '#F1F0FF',
      purple_400: '#BFB9FF',
      purple_600: '#48409E',
    },
    neutral: {
      white_000: '#FFFFFF',
      gray_100: '#F2F2F2',
      gray_300: '#C4C4C4',
      gray_400: '#6F6F6F',
    },
    semantic: {
      success: {
        green_400: '#2BA700',
      },
      warning: {
        yellow_200: '#FFBA53',
      },
      error: {
        red_200: '#FF7979',
      },
    },
  },
  fonts: {
    body: 'Libre Franklin, sans-serif',
  },
};

export const ThemeProviderApp = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
