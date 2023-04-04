import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import ThemeProviderProvider from './hooks/useTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProviderProvider>
    <App />
   </ThemeProviderProvider>
  </React.StrictMode>,
)
