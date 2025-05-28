import React from 'react';
import './historicoNutri.css';
import Header from '../../../components/compRecepcionista/compRecepcionista'; 

function HistoricoNutri() {
  return (
    <div className="page-container">
      <Header/>
      <main className="content">
        <h2>Histórico de Agendamento</h2>

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
