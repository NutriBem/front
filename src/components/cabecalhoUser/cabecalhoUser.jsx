import React from "react";
import './cabecalhoUser.css';
import { images, logos } from "../../config/assets";

function CabecalhoUser() {
    return (
        <header className="cabecalho-user">

            <div className="logo-titulo">
                <img src={logos.nutriBem} alt="Logo Nutribem" />
                <p className="titulo">NUTRIBEM</p>
            </div>

            <div className="icones">
                <img src={images.instagram_2} alt="Instagram" />
                <img src={images.linkedin} alt="LinkedIn" />
                <img src={images.youtube_2} alt="YouTube" />
            </div>

            <div className="login-agendamento">
                <button id="login">Login</button>
                <p>Agendamentos</p>
            </div>

        </header>
    );
}

export default CabecalhoUser;