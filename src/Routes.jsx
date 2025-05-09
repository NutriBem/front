import { BrowserRouter, Routes, Route } from 'react-router-dom'
//user
import Register from './pages/customer/register'
import Home from './pages/home'
import Login from './pages/customer/login'
import Nutritionist from './pages/nutricionista/paginaNutri'
import HistoricalNutri from './pages/recepcionista/historicoNutri'
import  HistoricalPatient from './pages/historicoPaciente/historicoPaciente'

import NotFound from './errors'

export default function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/nutritionist' element={<Nutritionist/>}/>
        <Route path='/historical' element={<HistoricalNutri/>}/>
        <Route path='/historicalPatient' element={<HistoricalPatient/>}/> 

        {/*Erros*/}
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}