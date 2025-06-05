import React from "react";
import './cabecalhoUser.css';
import { images, logos } from "../../config/assets";
import { Link } from "react-router-dom";

function CabecalhoUser() {
    return (
        <header className="cabecalho-user">

            <Link to={"/"}>
                <div className="logo-titulo">
                    <img src={logos.nutriBem} alt="Logo Nutribem" />
                    <p className="titulo">NUTRIBEM</p>
                </div>
            </Link>

            <div className="icones">
                <img src={images.instagram_2} alt="Instagram" />
                <img src={images.linkedin} alt="LinkedIn" />
                <img src={images.youtube_2} alt="YouTube" />
            </div>

            <div className="login-agendamento">
                <Link to={"/login"}><button id="login">Login</button></Link>
                <Link to={"/appointment"}><p>Agendamentos</p></Link>
            </div>

        </header>
    );
}

export default CabecalhoUser;