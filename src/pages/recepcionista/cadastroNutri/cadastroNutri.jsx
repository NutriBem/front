import React from 'react';
import './cadastroNutri.css';
import Header from '../../../components/compRecepcionista/compRecepcionista';

function CadastroNutri() {
  return (
    <div className="page-container">
      <Header />

      <div className="cadastro-page">

        <div className="cadastro-container">
          <h1>Cadastro de Nutricionista</h1>

          <form className="cadastro-form">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" placeholder="Digite o nome" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Digite o email" />
            </div>

            <div className="form-group">
              <label>Senha</label>
              <input type="password" placeholder="Digite a senha" />
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <input type="text" placeholder="Digite o telefone" />
            </div>

            <div className="form-group">
              <label>CRM</label>
              <input type="text" placeholder="Digite o CRM" />
            </div>

            <button type="submit" className="btn-cadastrar">
              Cadastrar Nutricionista
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroNutri;
