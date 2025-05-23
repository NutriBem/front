import React from 'react';
import './compRecepcionista.css'; 

function Sidebar() {
  return (
    <header className="sidebar">
      <div className="logo">Dashboard</div>
      <nav>
        <div className="menu-section">
          <div className="menu-title">Nutrólogo</div>
          <ul>
            <li>Adicionar Nutricionista</li>
            <li>Lista de Nutricionistas</li>
            <li>Histórico de agendamentos</li>
          </ul>
        </div>

        <div className="menu-section">
          <div className="menu-title">Pacientes</div>
          <ul>
            <li>Adicionar Paciente</li>
            <li>Lista de Paciente</li>
            <li>Agendar consulta</li>
            <li>Histórico de agendamentos</li>
          </ul>
        </div>

        <div className="menu-section">
          <div className="menu-title">Calendário</div>
        </div>
      </nav>
    </header>
  );
}

export default Sidebar;
