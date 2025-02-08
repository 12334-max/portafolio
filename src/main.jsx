import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/layout/main/App'
import { ContextProvider } from './services/Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
