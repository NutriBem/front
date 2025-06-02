import React from 'react';
import './historicoPaciente.css';
import Header from '../../../components/cabecalhoUser/cabecalhoUser'
function HistoricoConsultas() {
  return (
    <div className="page">
      <Header />

      <main className="content">
        <h2>Histórico de Agendamento</h2>

        <section className="cards-historico">
          {/* Os agendamentos serão renderizados aqui dinamicamente */}
        </section>
      </main>

      <footer>
        <a href="#" className="btn-voltar">Voltar para área do paciente</a>
      </footer>
      
    </div>
  );
}

export default HistoricoConsultas;
