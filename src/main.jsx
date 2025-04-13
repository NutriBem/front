import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home';

import {BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
