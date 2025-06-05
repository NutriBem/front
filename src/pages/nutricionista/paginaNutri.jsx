import React from 'react';
import './paginaNutri.css';
import { logos } from '../../config/assets';

function Agendamentos() {
  return (
    <div className="nutri-container">
      <header className="nutri-header">
        <img src={logos.nutriBem} alt="Nutribem" className="nutri-logo" />
        <p className="titulo">NUTRIBEM</p>
      </header>
      
      <div className="nutri-title-bar">
          <h2 className="nutri-title">Agendamentos</h2>
      </div>

      <main className="nutri-main">
        

        <div className="nutri-filters">
          <input type="text" placeholder="Nome" className="nutri-input" />
          <input type="date" className="nutri-input" />
        </div>

        <table className="nutri-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Data</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rodrigo Gomes</td>
              <td>11999999999</td>
              <td>05/06/2024</td>
              <td>
                <button className="nutri-button">Detalhes</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Agendamentos;
