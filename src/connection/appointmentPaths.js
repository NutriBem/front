import api from "../config/axiosConfig";

export const create = async (patientId, agendaId, receptionistId) => {
    try {
        const response = await api.post('/appointment', {
            patientId,
            agendaId,
            receptionistId
        });

        return response.data;
    } catch (error) {
        console.error('[API] Erro no register:', {
            Details: error.response?.data,
            Status: error.response?.status
        });
        throw error
    }
}

export const deleteById = async (id) => {
    try {
        const response = await api.delete(`/appointment/${id}`);
        return response;
    } catch (error) {
        console.error('[API] Consulta não encontrada:', {
            Details: error.response?.data,
            Status: error.response?.status
        });
        throw error
    }
}

export const getById = async (id) => {
    try {
        const response = await api.get(`/appointment/${id}`);
        return response;
    } catch (error) {
        console.error('[API] Consulta não encontrada:', {
            Details: error.response?.data,
            Status: error.response?.status
        });
        throw error
    }
}

export const getAppointmentOfTheDay = async () => {
    try {
        const response = await api.get("/appointment/day");
        return response.data;
    } catch (error) {
        console.error('[API] error:', {
            Details: error.response?.data,
            Status: error.response?.status
        });
        throw error
    }
}

export const getAll = async () => {
    try {
        const response = await api.get(`/appointment`);
        return response.data;
    } catch (error) {
        console.error('[API] Erro', {
            Details: error.response?.data,
            Status: error.response?.status
        });
        throw error
    }
}


