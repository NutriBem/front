import React, { useEffect, useState } from "react";
import './meuPerfil.css';
import Header from '../../../components/cabecalhoUser/cabecalhoUser';
import { Link } from "react-router-dom";
import ApiService from '../../../connection/ApiService';

function MeuPerfil() {

    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);

    const idPerson = "b62c1328-7d7e-46f8-94e9-f605bfcf04b8"; // vê com o luis como faz para pegar o ID do usuário, só sei que é na localStorage

    async function saveImage() {
        try {
            console.log(file);
            await ApiService.person.addImagePerson(file, idPerson);
            fetchImage();
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchImage() {
        try {
            const response = await ApiService.person.getImagePerson(idPerson);
            setImage(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchImage()
    }, []);

    return (
        <div>
            <Header />

            <main className="perfil-content">
                <h2 className="perfil-titulo">Meu Perfil</h2>

                <div className="perfil-bemvindo">
                    <div className="image-profile">
                        <img src={image} alt="oi" />
                        <p id="change-image">+</p>
                    </div>
                    <p className="bemvindo-texto">Bem vindo(a) <span className="nome-dinamico">{/* Nome do usuário */}</span></p>
                </div>

                <div className="botoes-perfil">
                    <Link to={"/historicalConsults"}><button className="btn-perfil">Ver meu histórico</button></Link>

                    <button className="btn-editar">Editar</button>
                    <input type="file" name="image" id="" accept=".png, .jpg, .jpeg" onChange={(e) => setFile(e.target.files[0])} />
                    <button onClick={() => saveImage()}>Salvar imagem</button>
                </div>

                <form className="form-perfil">
                    <div className="campo">
                        <label>Nome Completo</label>
                        <input type="text" placeholder="" />
                    </div>

                    <div className="campo">
                        <label>Senha</label>
                        <input type="password" placeholder="********" />
                    </div>

                    <div className="campo">
                        <label>E-mail</label>
                        <input type="email" placeholder="" />
                    </div>

                    <div className="campo">
                        <label>Telefone</label>
                        <input type="text" placeholder="" />
                    </div>
                </form>
            </main>
        </div>
    );
}

export default MeuPerfil;
