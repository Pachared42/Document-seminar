import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='bg-[#0B0B10] min-h-screen'>
      <App />
    </div>
  </BrowserRouter>,
)
