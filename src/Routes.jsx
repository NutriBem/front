import { BrowserRouter, Routes, Route } from 'react-router-dom'
//user
import Register from './pages/customer/register'
import Home from './pages/home'
import Login from './pages/customer/login'

import NotFound from './errors'

export default function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        {/*Erros*/}
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}