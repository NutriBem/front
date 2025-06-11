import React from "react";
import './cardNutriInformacao.css';
import { images } from "../../config/assets";

function CardNutriInformacao({ usuario, cpf, data, horario }) {
    return (
        <div className="cardNutriInfo">
            <div className="info-item">
                <img src={images.usuario} alt="Nutricionista" />
                <label>Nome:</label>
                <p>{usuario}</p>
            </div>

            <div className="info-item">
                <img src={images.cpf} alt="Calendário" />
                <label>CPF</label>
                <p>{cpf}</p>
            </div>

            <div className="info-item">
                <img src={images.calendario} alt="Calendário" />
                <label>Data e hora:</label>
                <p>{data} e {horario}</p>
            </div>

            <div className="info-item">
                <img src={images.maps} alt="Localização" />
                <label>Local:</label>
                <p>Av. Central, 1234 - Sala 205</p>
            </div>

            <div className="info-item">
                <img src={images.checagem} alt="Arquivos" />
                <a href="#" className="baixar-arquivos">Baixar arquivos</a>
            </div>
        </div>
    );
}

export default CardNutriInformacao;