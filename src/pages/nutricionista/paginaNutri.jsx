import React, { useEffect, useState } from 'react';
import './paginaNutri.css';
import { logos } from '../../config/assets';
import { Link } from 'react-router-dom';
import ApiService from '../../connection/ApiService';

function Agendamentos() {
  const [consultas, setConsultas] = useState([]);
  const [selectedConsulta, setSelectedConsulta] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchConsultas() {
      try {
        const data = await ApiService.appointment.getAll();
        const consultasComPaciente = await Promise.all(
          data.map(async (consulta) => {
            try {
              const paciente = await ApiService.patient.getPatientByCpf(consulta.cpf);
              return { ...consulta, paciente };
            } catch (err){
              console.error("Erro ao buscar paciente por ID:", err);
              return { ...consulta, paciente: { name: 'Não informado', telephone: '', email: '' } };
            }
          })
        );
        setConsultas(consultasComPaciente);
      } catch (error) {
        console.error("Erro ao buscar consultas:", error);
      }
    }

    fetchConsultas();
  }, []);

  const abrirDetalhes = (consulta) => {
    setSelectedConsulta(consulta);
    setShowModal(true);
  };

  const fecharModal = () => {
    setShowModal(false);
    setSelectedConsulta(null);
  };

  return (
    <div className="nutri-container">
      <header className="nutri-header">
        <img src={logos.nutriBem} alt="Nutribem" className="nutri-logo" />
        <p className="titulo">NUTRIBEM</p>
      </header>

      <div className="nutri-title-bar">
        <h2 className="nutri-title">Agendamentos</h2>
      </div>

      <main className="nutri-main">
        <div className="nutri-filters">
          <input type="text" placeholder="Nome" className="nutri-input" />
          <input type="date" className="nutri-input" />
        </div>

        <table className="nutri-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Data</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {consultas.map((consulta) => (
              <tr key={consulta.id}>
                <td>{consulta.paciente?.name}</td>
                <td>{consulta.paciente?.telephone}</td>
                <td>{consulta.appointmentDate}</td>
                <td>
                  <button className="nutri-button" onClick={() => abrirDetalhes(consulta)}>Detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="nutri-home-button-container">
          <Link to="/homeNutritionist" className="nutri-home-button">Voltar à Home</Link>
        </div>

        {showModal && selectedConsulta && (
          <div className="nutri-modal">
            <div className="nutri-modal-content">
              <h3>📝 Detalhes da Consulta</h3>
              <p><strong>Data/Hora:</strong> {selectedConsulta.appointmentDate} às {selectedConsulta.appointmentTime}</p>
              <p><strong>Paciente:</strong> {selectedConsulta.paciente?.name}</p>
              <p><strong>Contato:</strong> {selectedConsulta.paciente?.telephone} | {selectedConsulta.paciente?.email}</p>

              <button className="botao-vermelho">Cancelar consulta</button>
              <label>Motivo: <input type="text" className="campo-motivo" /></label>

              <label>📊 Resultado da Consulta:</label>
              <input type="file" accept=".pdf" className="input-arquivo" />

              <p><strong>Arquivo atual:</strong> Nenhum</p>

              <button className="botao-verde">Salvar Alterações</button>
              <button onClick={fecharModal} className="fechar-modal">Fechar</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Agendamentos;
