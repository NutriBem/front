import React, { use, useEffect, useState } from 'react';
import './listaPacientes.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';
import ApiService from '../../../../connection/ApiService';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

function ListaPaciente() {

  const [pacientes, setPacientes] = useState([])
  const [searchCpf, setSearchCpf] = useState('')

  //carregar pacientes
useEffect(() => {
  async function fetchPacientes() {
    try {
      const response = await ApiService.patient.getAllPatients();

      console.log("Resposta completa:", response); 
      setPacientes(response); //mds funciona

    } catch (error) {
      console.error('Erro: ' + error)
    }
  }
  fetchPacientes();
}, []);


  //filtra por cpf
const filtraPacientes = pacientes.filter(paciente =>
    paciente.cpf && paciente.cpf.includes(searchCpf)
  );


  // Função para remover paciente
  async function removerPaciente(id, nome) {
    confirmAlert({
      title: 'Remover Paciente',
      message: `Você tem certeza que deseja remover o paciente ${nome}?`,
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            try {
              await ApiService.person.deleteById(id);
              toast.success("Paciente removido com sucesso!");
              
              // Atualiza a lista de pacientes após remoção
              const response = await ApiService.patient.getAllPatients();
              setPacientes(response);
              
            } catch (error) {
              console.error("Erro ao remover paciente:", error);
              toast.error("Erro ao remover paciente!");
            }
          }
        },
        {
          label: 'Não',
          onClick: () => {}
        }
      ]
    });
  }


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
              value={searchCpf}
              onChange={(e) => setSearchCpf(e.target.value)}
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
                  <th>opções</th>
                </tr>
              </thead>
            <tbody>
                {filtraPacientes.map((paciente) => (
                  <tr key={paciente.id}>
                    <td>{paciente.name || 'N/A'}</td>
                    <td>{paciente.telephone || 'N/A'}</td>
                    <td>{paciente.cpf || 'N/A'}</td>
                    <td>{paciente.email || 'N/A'}</td>
                    <td>
                      <button 
                        className="details-button"
                        onClick={() => console.log("Detalhes:", paciente)}
                      >
                        Ver
                      </button>
                    </td>
                    <td>
                      <button className="edit-button">
                        Editar
                      </button>
                      <button 
                        className="delete-button"
                        onClick={() => removerPaciente(paciente.id, paciente.name)}
                      >
                        Excluir
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
}

export default ListaPaciente;

