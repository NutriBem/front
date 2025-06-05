import React from 'react';
import './compRecepcionista.css'; 
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <header className="sidebar-admin">
      <div className="sidebar-admin__logo">
        <Link to={"/homeRecepcionist"} className="sidebar-admin__logo-link">Dashboard</Link>
      </div>
      <nav className="sidebar-admin__nav">
        <div className="sidebar-admin__menu-section">
          <div className="sidebar-admin__menu-title">Nutrólogo</div>
          <ul className="sidebar-admin__menu-list">
            <li className="sidebar-admin__menu-item">
              <Link to={"/nutriRegister"} className="sidebar-admin__menu-link">Adicionar nutricionista</Link>
            </li>
            <li className="sidebar-admin__menu-item">
              <Link to={"/nutriList"} className="sidebar-admin__menu-link">Lista de nutricionistas</Link>
            </li>
            <li className="sidebar-admin__menu-item">
              <Link to={"/historicalNutri"} className="sidebar-admin__menu-link">Histórico de agendamentos</Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-admin__menu-section">
          <div className="sidebar-admin__menu-title">Pacientes</div>
          <ul className="sidebar-admin__menu-list">
            <li className="sidebar-admin__menu-item">
              <Link to={"/patientRegister"} className="sidebar-admin__menu-link">Adicionar paciente</Link>
            </li>
            <li className="sidebar-admin__menu-item">
              <Link to={"/patientList"} className="sidebar-admin__menu-link">Lista de pacientes</Link>
            </li>
            <li className="sidebar-admin__menu-item">
              <Link to={"/patientAppointment"} className="sidebar-admin__menu-link">Agendar consulta</Link>
            </li>
            <li className="sidebar-admin__menu-item">
              <Link to={"/patientHistorical"} className="sidebar-admin__menu-link">Histórico de agendamentos</Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-admin__menu-section">
          <div className="sidebar-admin__menu-title">Calendário</div>
          <ul className="sidebar-admin__menu-list">
            <li className="sidebar-admin__menu-item">
              <Link to={"/calendar"} className="sidebar-admin__menu-link">Calendário</Link>
            </li>
          </ul>
        </div>
        
      </nav>
    </header>
  );
}

export default Sidebar;
