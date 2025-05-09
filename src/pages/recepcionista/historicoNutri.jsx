import React from 'react';
import './historicoNutri.css';
import Header from '../../components/compRecepcionista/compRecepcionista'; 

function HistoricoNutri() {
  return (
    <div>
      <div id="header-container">
        <Header />
      </div>

      <main className="content">
        <h1>Histórico de Agendamentos</h1>

        <div className="filters">
          <input type="text" placeholder="Digite o nome da nutricionista" />
          <button className="search-btn">🔍</button>
          <label>
            Data da consulta:
            <input type="date" />
          </label>
        </div>

        <div className="appointments">
          {/* Nenhum dado exibido pois o banco está vazio */}
        </div>
      </main>
    </div>
  );
}

export default HistoricoNutri;
