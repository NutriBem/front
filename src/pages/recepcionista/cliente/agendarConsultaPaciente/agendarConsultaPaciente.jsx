import React, { useEffect, useState } from 'react';
import './agendarConsultaPaciente.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';
import ApiService from '../../../../connection/ApiService';

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default function AgendarConsultaPaciente() {
    const [selecionado, setSelecionado] = useState(null);
    const [popupAberto, setPopupAberto] = useState(false);
    const [tipoBusca, setTipoBusca] = useState(null);
    const [agendaFormatada, setAgendaFormatada] = useState({});
    const [idAgenda, setIdAgenda] = useState(null);
    const [patient, setPatient] = useState();
    const [cpf, setCpf] = useState("");

    async function createAppointment() {
        try {
            if (!patient)
                throw "Informe o usuário";

            if (idAgenda === null)
                throw "Informe a agenda";

            await ApiService.appointment.create((patient ? patient.id : null), idAgenda, "");
            fetchAgenda();
        } catch (error) {
            console.error(error);
        }
    }


    async function getPatient() {
        try {
            const response = await ApiService.patient.getPatientByCpf(cpf);
            setPatient(response);
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchAgenda() {
        const response = await ApiService.agenda.getAll();
        const agrupado = {};

        response.forEach(item => {
            const data = item.date;
            const hora = item.time.slice(0, 5);
            if (!agrupado[data]) agrupado[data] = {};
            agrupado[data][hora] = {
                id: item.id,
                disponivel: item.disponibility,
            };
        });

        setAgendaFormatada(agrupado);
    }

    useEffect(() => {
        fetchAgenda();
    }, []);

    const toggleHorario = async (data, hora) => {
        const slot = agendaFormatada[data][hora];
        if (!slot || !slot.disponivel) return;

        const chave = `${data}-${hora}`;
        setSelecionado(prev => (prev === chave ? null : chave));

        if (slot.id) setIdAgenda(slot.id);
    };

    const formatarDataLegivel = (dataStr) => {
        const date = new Date(dataStr);
        const nomeDia = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][date.getDay()];
        const dia = String(date.getDate()).padStart(2, '0');
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        return `${nomeDia}, ${dia}/${mes}`;
    };

    const horarios = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

    return (
        <div className="consultaRecepcionista-body">
            <Header />
            <div className="consultaRecepcionista-container">
                <h2 className="consultaRecepcionista-titulo">Agendar Consulta</h2>

                <div className="consultaRecepcionista-controles">
                    <div className="campo-busca">
                        <label>Cliente</label>
                        <div className="input-com-botao">
                            <input type="text" placeholder="CPF" value={cpf}/>
                            <button onClick={() => {
                                setTipoBusca('cliente');
                                setPopupAberto(true);
                            }}>⋮</button>
                        </div>
                    </div>
                    <div className="campo-busca">
                        <label>Nutrólogo (opcional)</label>
                        <div className="input-com-botao">
                            <input type="text" placeholder="CRM" />
                            <button onClick={() => {
                                setTipoBusca('nutrologo');
                                setPopupAberto(true);
                            }}>⋮</button>
                        </div>
                    </div>
                </div>

                <div className="tabela-calendario">
                    <div className="linha-horarios">
                        <div className="celula-dia-vazia"></div>
                        {horarios.map(hora => (
                            <div className="celula-horario" key={hora}>{hora}</div>
                        ))}
                    </div>

                    <div className="calendario-scroll">
                        {Object.keys(agendaFormatada).map(data => (
                            <div className="linha-dia" key={data}>
                                <div className="celula-dia">{formatarDataLegivel(data)}</div>
                                {horarios.map(hora => {
                                    const slot = agendaFormatada[data][hora];
                                    const ocupado = slot?.disponivel === false;
                                    const disponivel = slot?.disponivel === true;
                                    const chave = `${data}-${hora}`;
                                    const estaSelecionado = selecionado === chave;

                                    let classe = "bolinha-horario ";
                                    if (ocupado) classe += "vermelha";
                                    else if (disponivel) classe += "verde";
                                    else classe += "cinza";
                                    if (estaSelecionado) classe += " selecionado";

                                    return (
                                        <div
                                            key={hora}
                                            className={`celula-horario ${classe}`}
                                            onClick={() => toggleHorario(data, hora)}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="consultaRecepcionista-filtros-footer">
                    <button className="consultaRecepcionista-btn-agendar" onClick={() => createAppointment()}>Agendar</button>
                </div>
            </div>

            {popupAberto && (
                <div className="popupBusca-overlay">
                    <div className="popupBusca-container">
                        <div className="popupBusca-header">
                            <h2>{tipoBusca === 'cliente' ? 'Cliente' : 'Nutrólogo'}</h2>
                            <button className="popupBusca-close" onClick={() => setPopupAberto(false)}>✕</button>
                        </div>
                        <input
                            type="text"
                            className="popupBusca-input"
                            placeholder="Buscar CPF..."
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                        <button onClick={getPatient}>Buscar</button>
                        <table className="popupBusca-table">
                            <thead>
                                <tr>
                                    <th>CPF</th>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patient ? (
                                    <tr>
                                        <td>{patient.cpf}</td>
                                        <td>{patient.name}</td>
                                        <td>{patient.email}</td>
                                    </tr>
                                ) : (
                                    <tr>
                                        <td colSpan="3" style={{ textAlign: 'center', color: '#999' }}>
                                            Nenhum paciente encontrado
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
