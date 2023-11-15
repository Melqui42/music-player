import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import Home from './page/Home'
import GlobalStyle from './style/globalStyled'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
)
reportWebVitals()
