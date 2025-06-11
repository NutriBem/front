import React, { useEffect, useState } from "react";
import "./meuPerfil.css";
import Header from "../../../components/cabecalhoUser/cabecalhoUser";
import { Link } from "react-router-dom";
import ApiService from "../../../connection/ApiService";
import { useEditPatient } from "../../../hooks/useEditPatient";

function MeuPerfil() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const idPerson = localStorage.getItem("user-token"); // depois trocar para pegar do localStorage

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telephone: "",
  });

  async function fetchUserData() {
    try {
      const data = await ApiService.person.getById(idPerson);
      setUserData({
        name: data.name,
        email: data.email,
        telephone: data.telefone,
      });
      localStorage.setItem("user-name", data.name);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  }

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
    fetchImage();
    fetchUserData();
  }, []);

  const {
    editingId,
    editForm,
    isLoading,
    iniciarEdicao,
    CampoEditChange,
    salvarEdicao,
    cancelarEdicao,
  } = useEditPatient();

  return (
    <div>
      <Header />
      <main className="perfil-content">
        <h2 className="perfil-titulo">Meu Perfil</h2>

        <div className="perfil-header">
          {image && (
            <img src={image} alt="Foto de perfil" className="foto-perfil" />
          )}
          <p className="bemvindo-texto">
            Bem vindo(a), {localStorage.getItem("user-name")}
            <span className="nome-dinamico">{/* Nome do usuário */}</span>
          </p>
        </div>

        <div className="botoes-perfil">
          <Link to="/historicalConsults">
            <button className="btn-perfil">Ver meu histórico</button>
          </Link>
          {editingId !== idPerson ? (
            <button
              className="btn-editar"
              onClick={() =>
                iniciarEdicao({
                  id: idPerson,
                  name: userData.name,
                  email: userData.email,
                  telephone: userData.telephone,
                })
              }
            >
              Editar
            </button>
          ) : (
            <>
              <button
                className="btn-salvar"
                disabled={isLoading}
                onClick={async () => {
                  await salvarEdicao(idPerson, fetchUserData);
                }}
              >
                {isLoading ? "Salvando..." : "Salvar"}
              </button>
              <button className="btn-cancelar" onClick={cancelarEdicao}>
                Cancelar
              </button>
            </>
          )}

          {/* input de foto e salvar imagem… */}
          <label className="btn-upload">
            Adicionar foto de perfil
            <input
              type="file"
              accept=".png,.jpg,.jpeg"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>

          {file && (
            <button className="btn-salvar" onClick={saveImage}>
              Salvar imagem
            </button>
          )}
        </div>

        <form className="form-perfil">
          <div className="campo">
            <label>Nome Completo</label>
            {editingId === idPerson ? (
              <input
                name="name"
                type="text"
                value={editForm.name}
                onChange={CampoEditChange}
              />
            ) : (
              <span>{userData.name}</span>
            )}
          </div>

          <div className="campo">
            <label>Senha</label>
            {editingId === idPerson ? (
              <input
                name="password"
                type="password"
                value={editForm.password || ""}
                onChange={CampoEditChange}
                placeholder="********"
              />
            ) : (
              <span>********</span>
            )}
          </div>

          <div className="campo">
            <label>E-mail</label>
            {editingId === idPerson ? (
              <input
                name="email"
                type="email"
                value={editForm.email}
                onChange={CampoEditChange}
              />
            ) : (
              <span>{userData.email}</span>
            )}
          </div>

          <div className="campo">
            <label>Telefone</label>
            {editingId === idPerson ? (
              <input
                name="telephone"
                type="text"
                value={editForm.telephone}
                onChange={CampoEditChange}
              />
            ) : (
              <span>{userData.telephone}</span>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}

export default MeuPerfil;
