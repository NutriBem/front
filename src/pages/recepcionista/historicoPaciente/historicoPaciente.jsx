import React from 'react';
import './historicoPaciente.css';
import Header from '../../../components/compRecepcionista/compRecepcionista'; 

function HistoricoPaciente() {
  return (
    <div className="page-container">
      <Header />
      
      <main className="content">
        <h1>Histórico de Agendamentos</h1>

        <div className="filters">
          <input type="text" placeholder="Digite o nome do paciente" />
          <button className="search-btn">🔍</button>
        </div>

        <div className="appointments">
          {/* Nenhum dado exibido pois o banco está vazio */}
        </div>
      </main>
    </div>
  );
}


export default HistoricoPaciente;
