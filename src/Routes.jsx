import { BrowserRouter, Routes, Route } from 'react-router-dom'
//user
import Register from './pages/customer/register'
import Home from './pages/home'
import Login from './pages/customer/login'

export default function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}