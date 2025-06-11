import React, { useEffect, useState } from "react";
import './cabecalhoUser.css';
import { images, logos } from "../../config/assets";
import { Link } from "react-router-dom";
import { clearLocalStorage } from "../../utils/clearLocalStorage";

function CabecalhoUser() {
    const [nome, setNome] = useState('Visitante')

    useEffect(() => {
        function carregarUser() {
            const userName = localStorage.getItem("user-name")

            setNome(userName || 'Visitante')
        }
        carregarUser()
    }, [])


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
                {nome !== 'Visitante' ? (
                    <>
                        <div className="dropdown-user">
                            <button className="user-button">{`Olá, ${nome}`}</button>
                            <div className="dropdown-content">
                                <Link to="/profile">Meu Perfil</Link>
                                <button onClick={() => {
                                    clearLocalStorage();
                                    window.location.reload();
                                }}>Sair</button>
                            </div>
                        </div>
                        <Link to="/appointment"><p>Agendamentos</p></Link>
                    </>
                ) : (
                    <>
                        <Link to="/login"><button id="login">Login</button></Link>
                        <Link to="/appointment"><p>Agendamentos</p></Link>
                    </>
                )}
            </div>

        </header>
    );
}

export default CabecalhoUser;