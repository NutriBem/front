import React from 'react';
import './historicoPaciente.css';
import Header from '../../../components/cabecalhoUser/cabecalhoUser'
import { Link } from 'react-router-dom';
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
        <Link to={"/profile"}><a href="#" className="btn-voltar">Voltar para área do paciente</a></Link>
      </footer>
      
    </div>
  );
}

export default HistoricoConsultas;
