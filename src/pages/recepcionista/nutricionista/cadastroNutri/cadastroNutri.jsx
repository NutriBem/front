import React from 'react';
import './cadastroNutri.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';

function CadastroNutri() {
  return (
     <div className="container-cadastroNutri">
      <Header />

      <main className="conteudo-principal-cadastroNutri">
        <div className="cartao-formulario-cadastroNutri">
          <h2 className="titulo-formulario-cadastroNutri">Cadastro de Nutricionista</h2>

          <form className="grade-formulario-cadastroNutri">
            <div className="grupo-formulario-cadastroNutri">
              <label>Nome</label>
              <input type="text" placeholder="Digite o nome" />
            </div>
            <div className="grupo-formulario-cadastroNutri">
              <label>Email</label>
              <input type="email" placeholder="Digite o email" />
            </div>
            <div className="grupo-formulario-cadastroNutri">
              <label>Senha</label>
              <input type="password" placeholder="Digite a senha" />
            </div>
            <div className="grupo-formulario-cadastroNutri">
              <label>Telefone</label>
              <input type="text" placeholder="Digite o telefone" />
            </div>
            <div className="grupo-formulario-cadastroNutri full-width">
              <label>CRM</label>
              <input type="text" placeholder="Digite o CRM" />
            </div>

            <div className="grupo-formulario-cadastroNutri full-width">
              <button type="submit" className="botao-submit-cadastroNutri">
                Cadastrar Nutricionista
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CadastroNutri;
