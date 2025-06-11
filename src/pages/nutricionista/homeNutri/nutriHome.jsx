import React from "react";
import './nutriHome.css';
import { Link } from 'react-router-dom';
import { logos } from '../../../config/assets';

const agendamentosHoje = 5;

function HomeNutri() {
    return (
        <div className="homeNutri-wrapper">
            <header className="nutri-header">
                <img src={logos.nutriBem} alt="Nutribem" className="nutri-logo" />
                <p className="titulo">NUTRIBEM</p>
            </header>

            <div className="homeNutri-box">
                <div className="homeNutri-banner">
                    <h2>Bem-vindo(a), Nutricionista</h2>
                </div>

                <div className="homeNutri-content">
                    <div className="homeNutri-card">
                        <p className="homeNutri-card-label">Agendamentos para hoje:</p>
                        <p className="homeNutri-card-value">{agendamentosHoje}</p>
                    </div>

                    <p className="homeNutri-text">
                        Visualize seus agendamentos e atenda seus pacientes.
                    </p>

                    <Link to="/nutritionist" className="homeNutri-btn">
                        Acessar Agenda
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomeNutri;
