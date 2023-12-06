import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { Styles } from './styles/GlobalStyles/Index.tsx';
import { ThemeProviderApp } from './styles/ThemeProvider/Index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderApp>
      <Styles />
          <App />
    </ThemeProviderApp>
  </React.StrictMode>
);
