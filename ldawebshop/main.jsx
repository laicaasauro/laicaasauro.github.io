import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. Add this import
import './index.css'
import App from './App.jsx'

// 2. This replaces your old createRoot block entirely
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/ldawebshop">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
