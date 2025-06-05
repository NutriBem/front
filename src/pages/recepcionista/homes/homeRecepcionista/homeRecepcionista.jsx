import React from 'react';
import './homeRecepcionista.css';
import { images } from '../../../../config/assets';
import Sidebar from '../../../../components/compRecepcionista/compRecepcionista';
import { Link } from 'react-router-dom';

function HomeRecepcionista() {
    const today = new Date();
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('pt-BR', options);

    return (
        <div className="homeRecepcionista-layout">
            <Sidebar />

            <main className="homeRecepcionista-main">
                <div className="homeRecepcionista-card-area">
                    <header className="homeRecepcionista-header">
                        <h2>
                            Seja bem-vindo à <span className="highlight">NutriBem!</span>
                        </h2>
                        <p>Reunimos alguns acessos rápidos para você começar.</p>
                    </header>

                    <div className="homeRecepcionista-access">
                        <div className="homeRecepcionista-card">
                            <h3>Paciente</h3>
                            <div className="homeRecepcionista-card-buttons">
                                <Link to={"/patientRegister"}>
                                    <div className="homeRecepcionista-button">
                                        <img src={images.vector} alt="Adicionar paciente" />
                                        <span>Adicionar paciente</span>
                                    </div>
                                </Link>
                                
                                <Link to={"/patientAppointment"}>
                                    <div className="homeRecepcionista-button">
                                        <img src={images.coracao} alt="Agendar consulta" />
                                        <span>Agendar consulta</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="homeRecepcionista-card">
                            <h3>Nutrólogo</h3>
                            <div className="homeRecepcionista-card-buttons">

                                <Link to={"/nutriRegister"}>
                                    <div className="homeRecepcionista-button">
                                        <img src={images.vector} alt="Adicionar nutrólogo" />
                                        <span>Adicionar nutrólogo</span>
                                    </div>
                                </Link>
                                <div className="homeRecepcionista-button">
                                    <img src={images.agenda} alt="Adicionar agenda" />
                                    <span>Adicionar agenda</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="homeRecepcionista-agenda">
                        <h3>Agenda do dia</h3>
                        <p className="homeRecepcionista-date">{formattedDate}</p>
                        <div className="homeRecepcionista-agenda-list">
                            <div>09:00 Dr. Simon White - Consulta com a Maria das Graças</div>
                            <div>09:00 Dr. Simon White - Consulta com a Maria das Graças</div>
                            <div>09:00 Dr. Simon White - Consulta com a Maria das Graças</div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default HomeRecepcionista;
