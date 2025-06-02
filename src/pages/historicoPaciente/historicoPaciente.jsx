import React from 'react';
import './historicoPaciente.css';
import Header from '../../components/cabecalhoUser/cabecalhoUser'
function HistoricoConsultas() {
  return (
    <div>
      <Header/>
      

      <main className="content">
        {/* Componente de consulta será inserido aqui futuramente */}
      </main>

      <footer>
        <a href="#" className="btn-voltar">Voltar para área do paciente</a>
      </footer>
    </div>
  );
}

export default HistoricoConsultas;
