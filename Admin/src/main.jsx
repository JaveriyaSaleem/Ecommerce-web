import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ImageProvider } from "./Components/Admin/RightSide/ImageContext"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ImageProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ImageProvider>,
)
