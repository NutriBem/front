import { useState } from 'react';
import ApiService from '../connection/ApiService';
import { toast } from 'react-toastify';

export const useEditPatient = () => {
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({
        name: '',
        email: '',
        telephone: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    // Iniciar edição
    const iniciarEdicao = (paciente) => {
        setEditingId(paciente.id);
        setEditForm({
            name: paciente.name || '',
            email: paciente.email || '',
            telephone: paciente.telephone || ''
        });
    };

    // Atualizar campo do formulário
    const CampoEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Salvar edição
    const salvarEdicao = async (id, refreshPatients) => {
        setIsLoading(true);
        try {
            await ApiService.person.editUser(
                id,
                editForm.name,
                editForm.email,
                editForm.telephone
            );

            const response = await refreshPatients();
            setEditingId(null);

            toast.success("Paciente atualizado com sucesso");
            return response;
        } catch (error) {
            console.error("Erro ao editar paciente: ", error);
            const errorMessage = error.response?.data?.message ||
                error.response?.data ||
                'Erro ao atualizar paciente';
            toast.error(`Erro: ${errorMessage}`);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    // Cancelar edição
    const cancelarEdicao = () => {
        setEditingId(null);
    };

    return {
        editingId,
        editForm,
        isLoading,
        iniciarEdicao,
        CampoEditChange,
        salvarEdicao,
        cancelarEdicao,
        setEditingId
    };
};