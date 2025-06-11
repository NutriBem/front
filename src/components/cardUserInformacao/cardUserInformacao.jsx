import React from "react";
import './cardUserInformacao.css';
import { images } from "../../config/assets";

function CardUserInformacao({ data, horario, nutricionista, observacoes }) {
    return (
        <div className="cardUserInfo">
            <div className="info-item">
                <img src={images.calendario} alt="Calendário" />
                <label>Data:</label>
                <p>{data}</p>
            </div>

            <div className="info-item">
                <img src={images.relogio} alt="Horário" />
                <label>Horário:</label>
                <p>{horario}</p>
            </div>

            <div className="info-item">
                <img src={images.maps} alt="Localização" />
                <label>Local:</label>
                <p>Av. Central, 1234 - Sala 205</p>
            </div>

            <div className="info-item">
                <img src={images.usuario} alt="Nutricionista" />
                <label>Nutricionista:</label>
                <p>{nutricionista}</p>
            </div>

            <div className="info-item">
                <img src={images.checagem} alt="Arquivos" />
                <a href="#" className="baixar-arquivos">Baixar arquivos</a>
            </div>
        </div>
    );
}

export default CardUserInformacao;
