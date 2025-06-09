import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';
import ApiService from '../connection/ApiService';

export async function removerPerson(id, nome) {
    confirmAlert({
        title: 'Remover Usuario',
      message: `Você tem certeza que deseja remover o usuario ${nome}?`,
      buttons:[
        {
            label: 'Sim',
            onClick: async () => {
            try {
              await ApiService.person.deleteById(id);//get id para pegar o tipo ApiService.person ou ApiService.nutri
              toast.success("Usuario removido com sucesso!");
              
              // Atualiza a lista de usuaris dps remover
              const response = await ApiService.patient.getAllPatients(); // trocar swifit se for nutri ou pacient
              setPacientes(response);
              
            } catch (error) {
              console.error("Erro ao remover usuario:", error);
              toast.error("Erro ao remover usuario!");
            }
            }
        },
        {
          label: 'Não',
          onClick: () => {}
        }
      ]
    })
}