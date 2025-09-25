import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mainlayout from './layouts/Mainlayout/Mainlayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Mainlayout/>
  </StrictMode>,
)
