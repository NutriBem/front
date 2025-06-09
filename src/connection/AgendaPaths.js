import api from "../config/axiosConfig";

export const getByCrm = async (crm) => {
    try {
        const response = await api.get(`/agenda/${crm}`);

        return response.data;
    } catch (error) {
        console.error('[API] Agenda não encontrada:', {
            Details: error.response?.data,
            Status: error.response?.status
        });
        throw error
    }
}

export const getAll = async () => {
    try {
        const response = await api.get('/agenda');
        return response.data;
    } catch (error) {
        console.error('[API] Agenda não encontrada:', {
            Details: error.response?.data,
            Status: error.response?.status
        });
        throw error
    }
}
