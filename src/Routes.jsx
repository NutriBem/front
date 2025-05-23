import { BrowserRouter, Routes, Route } from 'react-router-dom'
//user
import Register from './pages/customer/register'
import Home from './pages/home'
import Login from './pages/customer/login'
import Nutritionist from './pages/nutricionista/paginaNutri'
import HistoricalNutriRep from './pages/recepcionista/historicoNutri/historicoNutri'
import HistoricalPatient from './pages/historicoPaciente/historicoPaciente'
import NutriRegistration from './pages/recepcionista/cadastroNutri/cadastroNutri'
import HistoricoPacienteRep from './pages/recepcionista/historicoPaciente/historicoPaciente'

import NotFound from './errors'

export default function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/nutritionist' element={<Nutritionist/>}/>
        <Route path='/historical' element={<HistoricalNutriRep/>}/>
        <Route path='/historicalPatient' element={<HistoricalPatient/>}/>
        <Route path='/patientHistorical' element={<HistoricoPacienteRep/>}/>
        <Route path='/nutriRegister' element={<NutriRegistration/>}/>

        {/*Erros*/}
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}