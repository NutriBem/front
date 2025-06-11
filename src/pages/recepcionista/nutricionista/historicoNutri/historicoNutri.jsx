import React from 'react';
import './historicoNutri.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';
import Card from '../../../../components/cardNutriInformacao/cardNutriInformacao'

function HistoricoNutri() {
  return (
    <div className="container-historicoNutri">
      <Header />
      <main className="conteudo-historicoNutri">
        <h2 className="titulo-historicoNutri">Histórico de Agendamento</h2>

        <div className="filtros-historicoNutri">
          <input
            type="text"
            placeholder="Digite o CRM"
            className="campo-pesquisa-historicoNutri"
          />
          <button className="botao-pesquisa-historicoNutri">🔍</button>
          <label className="label-data-historicoNutri">
            Data da consulta:
            <input type="date" className="campo-data-historicoNutri" />
          </label>
        </div>

        <div className="agendamentos-historicoNutri">
          <Card/>
        </div>
      </main>
    </div>
  );
}

export default HistoricoNutri;
