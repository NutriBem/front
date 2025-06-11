import React, { useEffect, useState } from 'react';
import './historicoPaciente.css';
import Header from '../../../components/cabecalhoUser/cabecalhoUser';
import CardUserInformacao from '../../../components/cardUserInformacao/cardUserInformacao';
import { Link } from 'react-router-dom';
import ApiService from '../../../connection/ApiService';

function HistoricoConsultas() {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    async function fetchConsultasComNutricionistas() {
      try {
        const data = await ApiService.appointment.getAll();

        // Para cada consulta, buscar o nome do nutricionista com base no CRM
        const consultasComNome = await Promise.all(
          data.map(async (consulta) => {
            let nomeNutricionista = 'Nutricionista não informado';

            if (consulta.crm) {
              try {
                const nutricionista = await ApiService.nutricionist.getByCrm(consulta.crm);
                nomeNutricionista = nutricionista?.name || nomeNutricionista;
              } catch (err) {
                console.warn(`Erro ao buscar nutricionista do CRM ${consulta.crm}`);
              }
            }

            return {
              ...consulta,
              nomeNutricionista,
            };
          })
        );

        setConsultas(consultasComNome);
      } catch (error) {
        console.error("Erro ao buscar consultas:", error);
      }
    }

    fetchConsultasComNutricionistas();
  }, []);

  return (
    <div className="page">
      <Header />

      <main className="content">
        <h2>Histórico de Agendamento</h2>

        <section className="cards-historico">
          {consultas.map((consulta) => (
            <CardUserInformacao
              key={consulta.id}
              data={consulta.appointmentDate}
              horario={consulta.appointmentTime}
              nutricionista={consulta.nomeNutricionista}
            />
          ))}
        </section>
      </main>

      <footer>
        <Link to="/profile" className="btn-voltar">Voltar para área do paciente</Link>
      </footer>
    </div>
  );
}

export default HistoricoConsultas;
