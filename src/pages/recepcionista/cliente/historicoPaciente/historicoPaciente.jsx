import React from 'react';
import './historicoPaciente.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista'; 
import Card from '../../../../components/cardPacienteInformacao/cardPacienteInformacao'

function HistoricoPaciente() {
  return (
    <div className="page-container-historicoPaciente">
      <Header />
      
      <main className="content-historicoPaciente">
        <h2 className="title-historicoPaciente">Histórico de Agendamentos</h2>

        <div className="filters-historicoPaciente">
          <input 
            type="text" 
            placeholder="Digite o nome do paciente" 
            className="input-historicoPaciente" 
          />
          <button className="search-btn-historicoPaciente">🔍</button>
        </div>

        <div className="appointments-historicoPaciente">
          <Card/>
        </div>
      </main>
    </div>
  );
}

export default HistoricoPaciente;
