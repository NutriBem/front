import React, { useState } from 'react';
import './agendarConsultaPaciente.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';

const horarios = [
    '08:00', '09:00', '10:00', '11:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
];

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default function AgendarConsultaPaciente() {
    const hoje = new Date();
    const [anoSelecionado, setAnoSelecionado] = useState(hoje.getFullYear());
    const [mesSelecionado, setMesSelecionado] = useState(hoje.getMonth());
    const [selecionado, setSelecionado] = useState(null);
    const [popupAberto, setPopupAberto] = useState(false);
    const [tipoBusca, setTipoBusca] = useState(null);

    const abrirPopup = (tipo) => {
        setTipoBusca(tipo);
        setPopupAberto(true);
    };

    const fecharPopup = () => {
        setPopupAberto(false);
        setTipoBusca(null);
    };

    const gerarDiasUteis = (ano, mes) => {
        const dias = [];
        const totalDias = new Date(ano, mes + 1, 0).getDate();
        for (let dia = 1; dia <= totalDias; dia++) {
            const data = new Date(ano, mes, dia);
            const diaSemana = data.getDay();
            if (diaSemana >= 1 && diaSemana <= 5) {
                const nomeDia = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][diaSemana];
                dias.push({
                    data,
                    label: `${nomeDia}, ${dia.toString().padStart(2, '0')}/${(mes + 1).toString().padStart(2, '0')}`,
                });
            }
        }
        return dias;
    };

    const diasUteis = gerarDiasUteis(anoSelecionado, mesSelecionado);

    const toggleHorario = (diaLabel, horario) => {
        const chave = `${diaLabel}-${horario}`;
        setSelecionado(prev => (prev === chave ? null : chave));
    };

    return (
        <div className="consultaRecepcionista-body">
            <Header />
            <div className="consultaRecepcionista-container">
                <h2 className="consultaRecepcionista-titulo">Agendar Consulta</h2>

                <div className="consultaRecepcionista-controles">
                    <div className="campo-busca">
                        <label>Cliente</label>
                        <div className="input-com-botao">
                            <input type="text" placeholder="CPF" />
                            <button onClick={() => abrirPopup('cliente')}>⋮</button>
                        </div>
                    </div>
                    <div className="campo-busca">
                        <label>Nutrólogo (opcional)</label>
                        <div className="input-com-botao">
                            <input type="text" placeholder="CRM" />
                            <button onClick={() => abrirPopup('nutrologo')}>⋮</button>
                        </div>
                    </div>
                </div>

                <div className="tabela-calendario">
                    <div className="linha-horarios">
                        <div className="celula-dia-vazia"></div>
                        {horarios.map(h => (
                            <div key={h} className="celula-horario">{h}</div>
                        ))}
                    </div>

                    <div className="calendario-scroll">
                        {diasUteis.map((dia) => (
                            <div className="linha-dia" key={dia.label}>
                                <div className="celula-dia">{dia.label}</div>
                                {horarios.map((hora) => {
                                    const chave = `${dia.label}-${hora}`;
                                    const selecionadoHorario = selecionado === chave;
                                    return (
                                        <div
                                            key={hora}
                                            className={`celula-horario bolinha-horario ${selecionadoHorario ? 'vermelha' : 'verde'}`}
                                            onClick={() => toggleHorario(dia.label, hora)}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="consultaRecepcionista-filtros-footer">
                    <div className="filtros">
                        <select
                            value={mesSelecionado}
                            onChange={e => setMesSelecionado(parseInt(e.target.value))}
                        >
                            {meses.map((mes, i) => (
                                <option key={i} value={i}>{mes}</option>
                            ))}
                        </select>
                        <select
                            value={anoSelecionado}
                            onChange={e => setAnoSelecionado(parseInt(e.target.value))}
                        >
                            {Array.from({ length: 5 }, (_, i) => hoje.getFullYear() - 2 + i).map(ano => (
                                <option key={ano} value={ano}>{ano}</option>
                            ))}
                        </select>
                    </div>
                    <button className="consultaRecepcionista-btn-agendar">Agendar</button>
                </div>
            </div>

            {popupAberto && (
                <div className="popupBusca-overlay">
                    <div className="popupBusca-container">
                        <div className="popupBusca-header">
                            <h2>{tipoBusca === 'cliente' ? 'Cliente' : 'Nutrólogo'}</h2>
                            <button className="popupBusca-close" onClick={fecharPopup}>✕</button>
                        </div>
                        <input
                            type="text"
                            className="popupBusca-input"
                            placeholder={tipoBusca === 'cliente' ? 'Buscar por CPF...' : 'Buscar por CRM...'}
                        />
                        <table className="popupBusca-table">
                            <thead>
                                <tr>
                                    <th>{tipoBusca === 'cliente' ? 'CPF' : 'CRM'}</th>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{tipoBusca === 'cliente' ? '47987444280' : '123456'}</td>
                                    <td>Italo Ribeiro</td>
                                    <td>italocantara6@...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
