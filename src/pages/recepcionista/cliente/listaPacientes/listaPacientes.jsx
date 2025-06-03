import React from 'react';
import './listaPacientes.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';


function ListaNutricionistas() {
    return (
        <div className="page-container">
            <Header />
            <main className="main-content">

                <div className="form-container">
                    <h2 className="form-title">Lista de Pacientes</h2>

                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Informe o CPF"
                            className="input-field"
                        />
                        <button className="search-button">🔍</button>
                    </div>

                    <div className="table-container">
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
};

export default ListaNutricionistas;
