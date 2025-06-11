import React from 'react' 
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import Routess from './Routes.jsx'
import './App.css' 
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Routess />
  </StrictMode>
)