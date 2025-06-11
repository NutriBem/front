import React, { useState, useEffect } from 'react';
import './listaNutris.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';
import ApiService from '../../../../connection/ApiService';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

function ListaNutricionistas() {
  const [nutricionistas, setNutricionistas] = useState([]);
  const [searchCrm, setSearchCrm] = useState('');

  // Carregar nutricionistas ao montar
  useEffect(() => {
    async function fetchNutricionistas() {
      try {
        const response = await ApiService.nutricionist.GetAllNutritionists();
        console.log("Resposta completa:", response);
        setNutricionistas(response);
      } catch (error) {
        console.error('Erro: ' + error);
      }
    }
    fetchNutricionistas();
  }, []);

  // Remover nutricionista
  function removerNutricionista(id, nome) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm-modal">
            <h1>Tem certeza?</h1>
            <p>Você deseja remover o nutricionista <strong>{nome}</strong>?</p>
            <div className="custom-buttons">
              <button onClick={onClose} className="cancel-button-modal">Cancelar</button>
              <button
                className="confirm-button-modal"
                onClick={async () => {
                  try {
                    await ApiService.person.deleteById(id);
                    toast.success("Nutricionista removido com sucesso!");
                    // Atualiza localmente a lista
                    setNutricionistas(prev => prev.filter(n => n.id !== id));
                  } catch (error) {
                    console.error("Erro ao remover nutricionista:", error);
                    toast.error("Erro ao remover nutricionista!");
                  }
                  onClose();
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        );
      }
    });
  }

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
              placeholder="Informe o CRM da Nutricionista"
              className="campo-input-listaNutri"
              value={searchCrm}
          <div className="barra-pesquisa-listaNutri">
            <input
              type="text"
              placeholder="Informe o CRM da Nutricionista"
              className="campo-input-listaNutri"
              value={searchCrm}
              onChange={(e) => setSearchCrm(e.target.value)}
            />
            <button className="botao-pesquisa-listaNutri">🔍</button>
          </div>
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
                    <td>{nutricionista.crm || 'N/A'}</td>
                    <td>{nutricionista.email || 'N/A'}</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => removerNutricionista(nutricionista.id, nutricionista.name)}
                      >
                        Excluir
                      </button>
                    </td>
                    <td>
                      <>
                        <button
                          className="delete-button"
                          onClick={() => {
                            console.log(
                              "Tentando remover nutricionista com ID:",
                              nutricionista.id
                            );
                            removerPerson(
                              nutricionista.crm,
                              nutricionista.name,
                              ApiService.nutricionist.GetAllNutritionists,
                              setNutricionistas
                            );
                          }}
                        >
                          Excluir
                        </button>
                      </>
                    </td>
                  </tr>
                ))}
                {filtraNutricionistas.length === 0 && (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center' }}>Nenhum nutricionista encontrado.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListaNutricionistas;
