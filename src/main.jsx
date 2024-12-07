import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import NoteApp from './NoteApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoteApp />
  </StrictMode>,
)
