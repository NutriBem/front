import React from 'react';
import './paginaNutri.css'; 

function Agendamentos() {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="profile-placeholder"></div>
      </aside>

      <main className="main-content">
        <h1>Agendamentos</h1>

        <div className="filters">
          <input type="text" placeholder="Escreva o nome de um paciente" />
          <select name="status">
            <option value="">Status</option>
            <option value="agendada">Agendada</option>
            <option value="realizada">Realizada</option>
          </select>
          <input type="date" />
        </div>

        <table>
          <thead>
            <tr>
              <th>Nº</th>
              <th>Nome</th>
              <th>Status</th>
              <th>Data</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {/* Dados do banco aqui */}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Agendamentos;
