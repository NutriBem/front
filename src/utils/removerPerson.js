import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';
import ApiService from '../connection/ApiService';

export async function removerPerson(id, nome, fetchFunction, setStateFunction) {
  confirmAlert({
    title: 'Remover Usuario',
    message: `Você tem certeza que deseja remover o usuario ${nome}?`,
    buttons: [
      {
        label: 'Sim',
        onClick: async () => {
          try {
            await ApiService.person.deleteById(id);//get id para pegar o tipo ApiService.person ou ApiService.nutri
            toast.success("Usuario removido com sucesso!");

            // Atualiza a lista de usuaris dps remover passada como parâmetro
            const response = await fetchFunction();
            setStateFunction(response);

          } catch (error) {
            console.error("Erro ao remover usuário:", error);
            let errorMessage = "Erro ao remover usuário!";

            if (error.response) {
              errorMessage = error.response.data?.message ||
                error.response.data?.error ||
                JSON.stringify(error.response.data);
            } else if (error.message) {
              errorMessage = error.message;
            }

            toast.error(errorMessage);
          }
        }
      },
      {
        label: 'Não',
        onClick: () => { }
      }
    ]
  })
}