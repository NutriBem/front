import './App.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/customer/register';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/register' Component={Register} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
