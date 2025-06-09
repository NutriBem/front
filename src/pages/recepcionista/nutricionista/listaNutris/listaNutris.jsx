import React, { useState, useEffect } from 'react';
import './listaNutris.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';
import ApiService from '../../../../connection/ApiService';

function ListaNutricionistas() {

    const [nutricionistas, setNutricionistas] = useState([])
    const [searchCrm, setSearchCrm] = useState('')

    //carregar nutri
    useEffect(() => {
  async function fetchNutricionistas() {
    try {
      const response = await ApiService.nutricionist.GetAllNutritionists()

      console.log("Resposta completa:", response); 
      setNutricionistas(response)

    } catch (error) {
      console.error('Erro: ' + error)
    }
  }
  fetchNutricionistas();
}, []);

const filtraNutricionistas = nutricionistas.filter(nutricionista =>
    nutricionista.crm && nutricionista.crm.includes(searchCrm)
  );



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
                             value={searchCrm}
              onChange={(e) => setSearchCrm(e.target.value)}
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
                                {filtraNutricionistas.map((nutricionista) => (
                                      <tr key={nutricionista.id}>
                    <td>{nutricionista.name || 'N/A'}</td>
                    <td>{nutricionista.telephone || 'N/A'}</td>
                    <td>{nutricionista.cpf || 'N/A'}</td>
                    <td>{nutricionista.email || 'N/A'}</td>
                    <td>
                      <button 
                        className="details-button"
                        onClick={() => console.log("Detalhes:", nutricionista)}
                      >
                        Ver
                      </button>
                    </td>
                  </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ListaNutricionistas;
