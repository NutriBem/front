import React from 'react';
import './cadastroPaciente.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';

function CadastroPaciente() {
  return (
    <div className="container-cadastroPaciente">
      <Header />

      <main className="main-content-cadastroPaciente">
        <div className="form-card-cadastroPaciente">
          <h2 className="form-title-cadastroPaciente">Cadastrar Paciente</h2>

          <form className="form-grid-cadastroPaciente">
            <div className="form-group-cadastroPaciente">
              <label>Nome</label>
              <input type="text" placeholder="Digite o nome" />
            </div>

            <div className="form-group-cadastroPaciente">
              <label>Email</label>
              <input type="email" placeholder="Digite o email" />
            </div>

            <div className="form-group-cadastroPaciente">
              <label>Senha</label>
              <input type="password" placeholder="Digite a senha" />
            </div>

            <div className="form-group-cadastroPaciente">
              <label>Telefone</label>
              <input type="text" placeholder="Digite o telefone" />
            </div>

            <div className="form-group-cadastroPaciente full-width-cadastroPaciente">
              <label>CPF</label>
              <input type="text" placeholder="Digite o CPF" />
            </div>

            <div className="form-group-cadastroPaciente full-width-cadastroPaciente">
              <button type="submit" className="submit-btn-cadastroPaciente">
                Cadastrar Paciente
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CadastroPaciente;
