import '@emotion/react';

declare module '@emotion/react' {
  interface Theme {
    colors: {
      primary: {
        purple_200: string;
        purple_400: string;
        purple_600: string;
      };
      neutral: {
        white_000: string;
        gray_100: string;
        gray_400: string;
      };
      semantic: {
        success: {
          green_400: string;
        };
        warning: {
          yellow_200: string;
        };
        error: {
          red_200: string;
        };
      };
    };
    fonts: {
      body: string;
    };
  }
}
