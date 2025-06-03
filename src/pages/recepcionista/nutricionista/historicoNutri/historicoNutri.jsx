import React from 'react';
import './historicoNutri.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';

function HistoricoNutri() {
  return (
    <div className="container-historicoNutri">
      <Header />
      <main className="conteudo-historicoNutri">
        <h2 className="titulo-historicoNutri">Histórico de Agendamento</h2>

        <div className="filtros-historicoNutri">
          <input
            type="text"
            placeholder="Digite o nome da nutricionista"
            className="campo-pesquisa-historicoNutri"
          />
          <button className="botao-pesquisa-historicoNutri">🔍</button>
          <label className="label-data-historicoNutri">
            Data da consulta:
            <input type="date" className="campo-data-historicoNutri" />
          </label>
        </div>

        <div className="agendamentos-historicoNutri">
          {/* Nenhum dado exibido pois o banco está vazio */}
        </div>
      </main>
    </div>
  );
}

export default HistoricoNutri;
