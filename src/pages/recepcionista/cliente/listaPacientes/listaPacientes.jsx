import React from 'react';
import './listaPacientes.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';

function ListaPaciente() {
  return (
    <div className="page-container-listaPaciente">
      <Header />
      <main className="main-content-listaPaciente">
        <div className="form-container-listaPaciente">
          <h2 className="form-title-listaPaciente">Lista de Pacientes</h2>

          <div className="search-bar-listaPaciente">
            <input
              type="text"
              placeholder="Informe o CPF"
              className="input-field-listaPaciente"
            />
            <button className="search-button-listaPaciente">🔍</button>
          </div>

          <div className="table-container-listaPaciente">
            <table>
              <thead>
                <tr>
                  <th>NOME</th>
                  <th>TELEFONE</th>
                  <th>CPF</th>
                  <th>EMAIL</th>
                  <th>DETALHES</th>
                </tr>
              </thead>
              <tbody>
                {/* Dados dinâmicos aqui */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListaPaciente;
