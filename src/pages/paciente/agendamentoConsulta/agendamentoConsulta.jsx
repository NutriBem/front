import React, { useState } from "react";
import './agendamentoConsulta.css';
import User from '../../../components/cabecalhoUser/cabecalhoUser';

function AgendaConsulta() {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const [mesAtual, setMesAtual] = useState(new Date().getMonth());
    const [anoAtual, setAnoAtual] = useState(new Date().getFullYear());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

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

    const horarios = [
        "08:00", "09:00", "10:00", "11:00",
        "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
    ];

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
                        
                        <div className="agendaConsulta-controle-mes">
                            <p className="agendaConsulta-instrucao">
                                Selecione o dia e o horário que deseja:
                            </p>

                            <div className="agendaConsulta-controle-ano">
                                <label htmlFor="ano">Ano:</label>
                                <select
                                    id="ano"
                                    className="agendaConsulta-select-ano"
                                    value={anoAtual}
                                    onChange={(e) => setAnoAtual(Number(e.target.value))}
                                >
                                    {Array.from({ length: 5 }, (_, i) => anoAtual - 2 + i).map((ano) => (
                                        <option key={ano} value={ano}>{ano}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="agendaConsulta-controle-navegacao">
                                <button
                                    className="agendaConsulta-arrow"
                                    onClick={() => {
                                        if (mesAtual === 0) {
                                            setMesAtual(11);
                                            setAnoAtual(anoAtual - 1);
                                        } else {
                                            setMesAtual(mesAtual - 1);
                                        }
                                    }}
                                >
                                    ←
                                </button>

                                <select
                                    className="agendaConsulta-select-mes"
                                    value={mesAtual}
                                    onChange={(e) => setMesAtual(Number(e.target.value))}
                                >
                                    {meses.map((mes, index) => (
                                        <option key={index} value={index}>{mes}</option>
                                    ))}
                                </select>

                                <button
                                    className="agendaConsulta-arrow"
                                    onClick={() => {
                                        if (mesAtual === 11) {
                                            setMesAtual(0);
                                            setAnoAtual(anoAtual + 1);
                                        } else {
                                            setMesAtual(mesAtual + 1);
                                        }
                                    }}
                                >
                                    →
                                </button>
                            </div>
                        </div>

                        <div className="agendaConsulta-dias">
                            {dias.map((data, index) => {
                                const diaFormatado = `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}`;
                                return (
                                    <div key={index} className="agendaConsulta-dia">
                                        <p>{data.toLocaleDateString('pt-BR', { weekday: 'short' })}</p>
                                        <p>{diaFormatado}</p>
                                        <div className="agendaConsulta-horarios">
                                            {horarios.map((h, i) => {
                                                const valor = `${diaFormatado}-${h}`;
                                                return (
                                                    <button
                                                        key={i}
                                                        className={`agendaConsulta-horario ${selectedTime === valor ? 'selected' : ''}`}
                                                        onClick={() => {
                                                            setSelectedDate(diaFormatado);
                                                            setSelectedTime(valor);
                                                        }}
                                                    >
                                                        {h}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="agendaConsulta-resumo">
                        <label htmlFor="nutricionista">Selecione o nutricionista:</label>
                        <select id="nutricionista" className="agendaConsulta-select-nutricionista">
                            <option value="">--</option>
                            {/* Dados virão do banco */}
                        </select>

                        <div className="agendaConsulta-endereco">
                            <p><strong>Endereço:</strong></p>
                            <p>Av. Central, 1234 - Sala 205</p>
                            <p>Bairro Saúde, São Bernardo do Campo - SP</p>
                            <p>CEP 09876-000</p>
                            <p>Próximo ao Shopping Central, fácil acesso por transporte público.</p>
                        </div>

                        <button className="agendaConsulta-btn-agendar">Agendar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgendaConsulta;
