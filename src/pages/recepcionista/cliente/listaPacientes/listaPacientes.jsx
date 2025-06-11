import React, { use, useEffect, useState } from 'react';
import './listaPacientes.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';
import ApiService from '../../../../connection/ApiService';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

function ListaPaciente() {

  const [pacientes, setPacientes] = useState([])
  const [searchCpf, setSearchCpf] = useState('')

  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({
    name: '',
    email: '',
    telephone: ''
  });

  const [isLoading, setIsLoading] = useState(false);

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

  //Iniciar edição
  const iniciarEdicao = (paciente) => {
    setEditingId(paciente.id)
    setEditForm({
      name: paciente.name || '',
      email: paciente.email || '',
      telephone: paciente.telephone || ''
    })
  }

  //atualizar campo d formulartio 
  const CampoEditChange = (e) => {
    const { name, value } = e.target
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  //salvar edição 
  const salvarEdicao = async (id) => {
    setIsLoading(true);
    try {
      await ApiService.person.editUser(
        id,
        editForm.name,
        editForm.email,
        editForm.telephone
      )

      const response = await ApiService.patient.getAllPatients()
      setPacientes(response)
      setEditingId(null)

      toast.success("Paciente atualizado com sucesso")

    } catch (error) {
      console.error("Error ao editar paciente: ", error)
              const errorMessage = error.response?.data?.message || 
                            error.response?.data || 
                            'Erro ao atualizar paciente';
        
        toast.error(`Erro: ${errorMessage}`);
    } finally {
      setIsLoading(false)
    }
  }

  // Cancelar edição
  const cancelarEdicao = () => {
    setEditingId(null);
  };

  const filtraPpacientes = pacientes.filter(paciente =>
    paciente.cpf && paciente.cpf.includes(searchCpf)
  );

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
                {filtraPpacientes.map((paciente) => (
                  <tr key={paciente.id}>
                    <td>
                      {editingId === paciente.id ? (
                        <input
                          type="text"
                          name="name"
                          value={editForm.name}
                          onChange={CampoEditChange}
                        />
                      ) : (
                        paciente.name || 'N/A'
                      )}
                    </td>
                    <td>
                      {editingId === paciente.id ? (
                        <input
                          type="text"
                          name="telephone"
                          value={editForm.telephone}
                          onChange={CampoEditChange}
                        />
                      ) : (
                        paciente.telephone || 'N/A'
                      )}
                    </td>
                    <td>{paciente.cpf || 'N/A'}</td>
                    <td>
                      {editingId === paciente.id ? (
                        <input
                          type="text"
                          name="email"
                          value={editForm.email}
                          onChange={CampoEditChange}
                        />
                      ) : (
                        paciente.email || 'N/A'
                      )}
                    </td>
                    <td>
                      <button 
                        className="details-button"
                        onClick={() => console.log("Detalhes:", paciente)}
                      >
                        Ver
                      </button>
                    </td>
                    <td>
                      {editingId === paciente.id ? (
                        <>
                          <button 
                            className="save-button"
                            onClick={() => salvarEdicao(paciente.id)}
                          >
                            {isLoading ? 'Salvando...' : 'Salvar'}
                          </button>
                          <button 
                            className="cancel-button"
                            onClick={cancelarEdicao}
                          >
                            Cancelar
                          </button>
                        </>
                      ) : (
                        <>
                          <button 
                            className="edit-button"
                            onClick={() => iniciarEdicao(paciente)}
                          >
                            Editar
                          </button>
                          <button 
                            className="delete-button"
                            onClick={() => removerPaciente(paciente.id, paciente.name)}
                          >
                            Excluir
                          </button>
                        </>
                      )}
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

