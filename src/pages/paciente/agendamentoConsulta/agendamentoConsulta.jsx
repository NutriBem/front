import React, { useEffect, useState } from "react";
import './agendamentoConsulta.css';
import User from '../../../components/cabecalhoUser/cabecalhoUser';
import ApiService from "../../../connection/ApiService";

function AgendaConsulta() {
    const [mesAtual, setMesAtual] = useState(new Date().getMonth());
    const [anoAtual, setAnoAtual] = useState(new Date().getFullYear());
    const [selectedTime, setSelectedTime] = useState(null);

    const [selectedNutritionistCrm, setSelectedNutritionistCrm] = useState("");
    const [nutritionists, setNutritionists] = useState([]);
    const [agenda, setAgenda] = useState([]);
    const [selectedAgendaId, setSelectedAgendaId] = useState(null);

    const createAppointment = async () => {
        // consultar o id na localStorage
        // const id = "";

        try {
            if (selectedAgendaId == null)
                return

            const response = await ApiService.appointment.create(localStorage.getItem("user-token"), selectedAgendaId, ""); // (idPatient, idAgenda, idReceptionist) está funcionando
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    // Obj agenda
    //[
    // {
    //  "id": 1
    // 	"nutriName": "Luis",
    // 	"date": "2025-06-09",
    // 	"time": "08:00:00",
    // 	"disponibility": true
    // },
    // {
    //  "id": 1
    // 	"nutriName": "Luis",
    // 	"date": "2025-06-09",
    // 	"time": "08:00:00",
    // 	"disponibility": true
    // },
    //]

    useEffect(() => {
        async function fetchNutritionis() {
            try {
                const response = await ApiService.nutricionist.GetAllNutritionists();
                setNutritionists(response);
            } catch (error) {
                console.error(error);
            }
        }

        fetchNutritionis();
    }, [])


    useEffect(() => {
        async function fetchAgenda() {
            if (!selectedNutritionistCrm) return;

            try {
                const response = await ApiService.agenda.getByCrm(selectedNutritionistCrm);
                setAgenda(response);
            } catch (error) {
                console.error(error);
            }
        }

        fetchAgenda();
    }, [selectedNutritionistCrm]);


    const diasUteisDoMes = () => {
        const dias = [];
        const data = new Date(anoAtual, mesAtual, 1);
        while (data.getMonth() === mesAtual) {
            const diaDaSemana = data.getDay();
            if (diaDaSemana >= 1 && diaDaSemana <= 5) {
                dias.push(new Date(data));
            }
            data.setDate(data.getDate() + 1);
        }
        return dias;
    };

    const dias = diasUteisDoMes();

    return (
        <div className="agendaConsulta-container">
            <User />
            <div className="agendaConsulta-wrapper">
                <div className="agendaConsulta-header">
                    <h2>Agendar consulta</h2>
                </div>
                <div className="agendaConsulta-content">

                    <div className="agendaConsulta-calendario">

                        <div className="agendaConsulta-dias">
                            {selectedNutritionistCrm ? (
                                dias.map((data, index) => {
                                    const diaFormatado = `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}`;
                                    const horariosDisponiveis = agenda.filter(item =>
                                        item.date === data.toISOString().split('T')[0] && item.disponibility
                                    );

                                    // Verifica se há horários disponíveis para o dia
                                    if (horariosDisponiveis.length === 0)
                                        return null; // Não renderiza o dia se não houver horários disponíveis

                                    return (
                                        <div key={index} className="agendaConsulta-dia">
                                            <p>{data.toLocaleDateString('pt-BR', { weekday: 'short' })}</p>
                                            <p>{diaFormatado}</p>
                                            <div className="agendaConsulta-horarios">
                                                {horariosDisponiveis.map((item, i) => {
                                                    const valor = `${diaFormatado}-${item.time.split(':')[0]}:${item.time.split(':')[1]}`;
                                                    return (
                                                        <button
                                                            key={i}
                                                            className={`agendaConsulta-horario ${selectedTime === valor ? 'selected' : ''}`}
                                                            onClick={() => {
                                                                setSelectedTime(valor);
                                                                setSelectedAgendaId(item.id); // Atribui o ID da agenda selecionada
                                                            }}
                                                        >
                                                            {item.time.split(':')[0]}:{item.time.split(':')[1]}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div>Selecione o nutricionista</div>
                            )}
                        </div>
                    </div>

                    <div className="agendaConsulta-resumo">
                        <label htmlFor="nutricionista">Selecione o nutricionista:</label>
                        <select
                            value={selectedNutritionistCrm}
                            onChange={(e) => setSelectedNutritionistCrm(e.target.value)}
                        >
                            <option value="">-- Selecione --</option>
                            {nutritionists.map(n => (
                                <option key={n.crm} value={n.crm}>{n.name}</option>
                            ))}
                        </select>

                        <div className="agendaConsulta-endereco">
                            <p><strong>Endereço:</strong></p>
                            <p>Av. Central, 1234 - Sala 205</p>
                            <p>Bairro Saúde, São Bernardo do Campo - SP</p>
                            <p>CEP 09876-000</p>
                            <p>Próximo ao Shopping Central, fácil acesso por transporte público.</p>
                        </div>

                        <button onClick={() => createAppointment()} className="agendaConsulta-btn-agendar">Agendar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgendaConsulta;
