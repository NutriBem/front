import React from 'react';
import './compRecepcionista.css'; 

function Sidebar() {
  return (
    <header className="sidebar-admin">
      <div className="sidebar-admin__logo">Dashboard</div>
      <nav className="sidebar-admin__nav">
        <div className="sidebar-admin__menu-section">
          <div className="sidebar-admin__menu-title">Nutrólogo</div>
          <ul className="sidebar-admin__menu-list">
            <li className="sidebar-admin__menu-item">Adicionar nutricionista</li>
            <li className="sidebar-admin__menu-item">Lista de nutricionistas</li>
            <li className="sidebar-admin__menu-item">Histórico de agendamentos</li>
          </ul>
        </div>

        <div className="sidebar-admin__menu-section">
          <div className="sidebar-admin__menu-title">Pacientes</div>
          <ul className="sidebar-admin__menu-list">
            <li className="sidebar-admin__menu-item">Adicionar paciente</li>
            <li className="sidebar-admin__menu-item">Lista de pacientes</li>
            <li className="sidebar-admin__menu-item">Agendar consulta</li>
            <li className="sidebar-admin__menu-item">Histórico de agendamentos</li>
          </ul>
        </div>

        <div className="sidebar-admin__menu-section">
          <div className="sidebar-admin__menu-title">Calendário</div>
        </div>
      </nav>
    </header>
  );
}

export default Sidebar;
