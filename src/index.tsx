import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { defaultTheme } from './styles/themes/default'
import { NotesContextProvider } from './contexts/NotesContext'
import { GlobalStyle } from './styles/global'

// eslint-disable-next-line
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <NotesContextProvider>
          <GlobalStyle />
          <App />
        </NotesContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
