import React from 'react';
import './cadastroPaciente.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';

function CadastroNutri() {
  return (
     <div className="container">
      <Header />

      <main className="main-content">
        <div className="form-card">
          <h2 className="form-title">Cadastrar Paciente</h2>

          <form className="form-grid">
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
            <div className="form-group full-width">
              <label>CPF</label>
              <input type="text" placeholder="Digite o CPF" />
            </div>

            <div className="form-group full-width">
              <button type="submit" className="submit-btn">
                Cadastrar Paciente
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CadastroNutri;
