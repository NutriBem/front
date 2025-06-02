import { BrowserRouter, Routes, Route } from 'react-router-dom'
//user
import Register from './pages/customer/register'
import Home from './pages/home'
import Login from './pages/customer/login'
import Profile from './pages/paciente/meuPerfil/meuPerfil'
import HistoricalPatient from './pages/paciente/historicoPaciente/historicoPaciente'

//Recepcionista - Nutrólogo
import NutriRegistration from './pages/recepcionista/cadastroNutri/cadastroNutri'
import NutriList from './pages/recepcionista/listaNutris/listaNutris'
import HistoricalNutriRep from './pages/recepcionista/historicoNutri/historicoNutri'

//Recepcionista - Paciente
import PatientRegister from './pages/recepcionista/cadastroPaciente/cadastroPaciente'
import PatientList from './pages/recepcionista/listaPacientes/listaPacientes'
import HistoricoPacienteRep from './pages/recepcionista/historicoPaciente/historicoPaciente'

//Recepcionista - Áreas padrão

//Nutricionista
import Nutritionist from './pages/nutricionista/paginaNutri'

//URL´s inválidas
import NotFound from './errors'

export default function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Área usuário*/}
        <Route path='/' element={<Home />} />  
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/historicalConsults' element={<HistoricalPatient/>}/>
        
        {/*Área Recepcionista - Nutrólogo*/}
        <Route path='/nutriRegister' element={<NutriRegistration/>}/>
        <Route path='/nutriList' element={<NutriList/>}/>
        <Route path='/historicalNutri' element={<HistoricalNutriRep/>}/>

        {/*Área Recepcionista - Paciente*/}
        <Route path='/patientRegister' element={<PatientRegister/>}/>
        <Route path='/patientList' element={<PatientList/>}/> 
        <Route path='/patientHistorical' element={<HistoricoPacienteRep/>}/>

        {/*Área Recepcionista*/}


        {/*Página Nutricionista*/}
        <Route path='/nutritionist' element={<Nutritionist/>}/>
        
        {/*Erros*/}
        <Route path='*' element={<NotFound />}/>
        
      </Routes>
    </BrowserRouter>
  )
}