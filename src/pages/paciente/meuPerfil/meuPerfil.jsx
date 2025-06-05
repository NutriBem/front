import React from "react";
import './meuPerfil.css';
import Header from '../../../components/cabecalhoUser/cabecalhoUser';
import { Link } from "react-router-dom";

function MeuPerfil() {
    return (
        <div>
            <Header />

            <main className="perfil-content">
                <h2 className="perfil-titulo">Meu Perfil</h2>

                <div className="perfil-bemvindo">
                    <p className="bemvindo-texto">Bem vindo(a) <span className="nome-dinamico">{/* Nome do usuário */}</span></p>
                    <p className="email-dinamico">{/* Email do usuário */}</p>
                </div>

                <div className="botoes-perfil">
                    <Link to={"/historicalConsults"}><button className="btn-perfil">Ver meu histórico</button></Link>
                    
                    <button className="btn-editar">Editar</button>
                </div>

                <form className="form-perfil">
                    <div className="campo">
                        <label>Nome Completo</label>
                        <input type="text" placeholder=""/>
                    </div>

                    <div className="campo">
                        <label>Senha</label>
                        <input type="password" placeholder="********"/>
                    </div>

                    <div className="campo">
                        <label>E-mail</label>
                        <input type="email" placeholder=""/>
                    </div>

                    <div className="campo">
                        <label>Telefone</label>
                        <input type="text" placeholder=""/>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default MeuPerfil;
