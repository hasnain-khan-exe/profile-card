import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/profile-card'>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
