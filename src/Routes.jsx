import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//user
import Register from "./pages/paciente/register/index";
import Home from "./pages/home";
import Login from "./pages/paciente/login/index";
import Profile from "./pages/paciente/meuPerfil/meuPerfil";
import Agenda from "./pages/paciente/agendamentoConsulta/agendamentoConsulta";
import HistoricalPatient from "./pages/paciente/historicoPaciente/historicoPaciente";

//Recepcionista - Nutrólogo
import NutriRegistration from "./pages/recepcionista/nutricionista/cadastroNutri/cadastroNutri";
import NutriList from "./pages/recepcionista/nutricionista/listaNutris/listaNutris";
import HistoricalNutriRep from "./pages/recepcionista/nutricionista/historicoNutri/historicoNutri";

//Recepcionista - Paciente
import PatientRegister from "./pages/recepcionista/cliente/cadastroPaciente/cadastroPaciente";
import PatientList from "./pages/recepcionista/cliente/listaPacientes/listaPacientes";
import HistoricoPacienteRep from "./pages/recepcionista/cliente/historicoPaciente/historicoPaciente";
import AgendaRecepcionista from "./pages/recepcionista/cliente/agendarConsultaPaciente/agendarConsultaPaciente";

//Recepcionista - Áreas padrão
import HomeRecepcionista from "./pages/recepcionista/homes/homeRecepcionista/homeRecepcionista";
import Calendar from "./pages/recepcionista/homes/calendario/calendario";

//Nutricionista
import Nutritionist from "./pages/nutricionista/paginaNutri";
import HomeNutri from "./pages/nutricionista/homeNutri/nutriHome";

//URL´s inválidas
import NotFound from "./errors";
import { ProtectedRoute } from "./contexts/ProtectedRoute";

export default function Routess() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*Rotas públicas*/}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/*Rotas paciente*/}
          <Route path="/profile" element={
            <ProtectedRoute requiredType={1}>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/appointment" element={
            <ProtectedRoute requiredType={1}>
              <Agenda />
            </ProtectedRoute>
          } />
          <Route path="/historicalConsults" element={
            <ProtectedRoute requiredType={1}>
              <HistoricalPatient />
            </ProtectedRoute>
          } />

          {/*Área Recepcionista - Nutrólogo*/}
          <Route path="/nutriRegister" element={
            <ProtectedRoute requiredType={3}>
              <NutriRegistration />
            </ProtectedRoute>
          } />
          <Route path="/nutriList" element={
            <ProtectedRoute requiredType={3}>
              <NutriList />
            </ProtectedRoute>
          } />
          <Route path="/historicalNutri" element={
            <ProtectedRoute requiredType={3}>
              <HistoricalNutriRep />
            </ProtectedRoute>
          } />

          {/*Área Recepcionista - Paciente*/}
          <Route path="/patientRegister" element={ 
            <ProtectedRoute requiredType={3}>
              <PatientRegister />
            </ProtectedRoute>
          } />
          <Route path="/patientList" element={
            <ProtectedRoute requiredType={3}>
              <PatientList />
            </ProtectedRoute>
          } />
          <Route path="/patientHistorical" element={
            <ProtectedRoute requiredType={3}>
              <HistoricoPacienteRep />
            </ProtectedRoute>
          } />
          <Route path="/patientAppointment" element={
            <ProtectedRoute requiredType={3}>
              <AgendaRecepcionista />
            </ProtectedRoute>
          } />

          {/*Área Recepcionista*/}
              <Route path="/homeRecepcionist" element={
            <ProtectedRoute requiredType={3}>
                <HomeRecepcionista/>
            </ProtectedRoute>
          } />
          <Route path="/calendar" element={
            <ProtectedRoute requiredType={3}>
              <Calendar />
            </ProtectedRoute>
          } />

          {/*Rotas Nutricionista 2*/}
          <Route
            path="/nutritionist"
            element={
              <ProtectedRoute requiredType={2}>
                <Nutritionist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/homeNutritionist"
            element={
              <ProtectedRoute requiredType={2}>
                <HomeNutri />
              </ProtectedRoute>
            }
          />

          {/*Erros*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
