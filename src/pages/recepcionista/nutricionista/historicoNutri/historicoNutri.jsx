import React, { useEffect, useState } from 'react';
import './historicoNutri.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';
import Card from '../../../../components/cardNutriInformacao/cardNutriInformacao'
import ApiService from '../../../../connection/ApiService';

function HistoricoNutri() {
  const [consultas, setConsultas] = useState([]);
  const [crmFiltro, setCrmFiltro] = useState('');
  const [dataFiltro, setDataFiltro] = useState('');
  const [consultasFiltradas, setConsultasFiltradas] = useState([]);

  useEffect(() => {
  async function fetchConsultas() {
    try {
      const data = await ApiService.appointment.getAll();

      const consultasComNomes = await Promise.all(
        data.map(async (consulta) => {
          let nomePaciente = 'Paciente não informado';

          if (consulta.cpf) {
            try {
              const paciente = await ApiService.patient.getPatientByCpf(consulta.cpf);
              nomePaciente = paciente?.name || nomePaciente;
            } catch (err) {
              console.warn(`Erro ao buscar paciente do CPF ${consulta.cpf}`);
            }
          }

          return {
            ...consulta,
            nomePaciente,
          };
        })
      );

      setConsultas(consultasComNomes);
      setConsultasFiltradas(consultasComNomes); // <-- salvar também os filtrados
    } catch (error) {
      console.error("Erro ao buscar consultas:", error);
    }
  }

  fetchConsultas();
}, []);

  function aplicarFiltros() {
  let filtradas = consultas;

  if (crmFiltro.trim() !== '') {
    filtradas = filtradas.filter(consulta =>
      consulta.crm?.toLowerCase().includes(crmFiltro.toLowerCase())
    );
  }

  if (dataFiltro !== '') {
    filtradas = filtradas.filter(consulta => consulta.appointmentDate === dataFiltro);
  }

  setConsultasFiltradas(filtradas);
}


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
    value={crmFiltro}
    onChange={(e) => setCrmFiltro(e.target.value)}
  />
          <button className="botao-pesquisa-historicoNutri" onClick={aplicarFiltros}>🔍</button>
          <label className="label-data-historicoNutri">
    Data da consulta:
    <input
      type="date"
      className="campo-data-historicoNutri"
      value={dataFiltro}
      onChange={(e) => setDataFiltro(e.target.value)}
    />
  </label>
        </div>

        <div className="agendamentos-historicoNutri">
  {consultasFiltradas.length === 0 ? (
    <p>Nenhuma consulta encontrada.</p>
  ) : (
    consultasFiltradas.map((consulta) => (
      <Card
        key={consulta.id}
        data={consulta.appointmentDate}
        horario={consulta.appointmentTime}
        usuario={consulta.nomePaciente}
        cpf={consulta.cpf}
      />
    ))
  )}
</div>

      </main>
    </div>
  );
}

export default HistoricoNutri;
