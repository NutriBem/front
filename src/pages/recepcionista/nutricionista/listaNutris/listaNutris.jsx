import React from 'react';
import './listaNutris.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';

function ListaNutricionistas() {
    return (
        <div className="container-listaNutri">
            <Header />
            <main className="conteudo-principal-listaNutri">

                <div className="cartao-formulario-listaNutri">
                    <h2 className="titulo-formulario-listaNutri">Lista de Nutricionistas</h2>

                    <div className="barra-pesquisa-listaNutri">
                        <input
                            type="text"
                            placeholder="Informe o nome da Nutricionista"
                            className="campo-input-listaNutri"
                        />
                        <button className="botao-pesquisa-listaNutri">🔍</button>
                    </div>

                    <div className="tabela-container-listaNutri">
                        <table className="tabela-listaNutri">
                            <thead>
                                <tr>
                                    <th>NOME</th>
                                    <th>TELEFONE</th>
                                    <th>CRM</th>
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
