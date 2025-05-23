import api from "../config/axiosConfig";

export const getById = async(id) => {
    try {
        const response = api.get(`id/${id}`);
        return response.data
    } catch (error) {
        console.error('[API] Erro em achar usuario por id:', {
        Details: error.response?.data,
        Status: error.response?.status
    });
    throw error
    }
}

export const loginUser = async(email, password) => {
    try {
        const response = api.post('/login', {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('[API] Erro no login de usuario:', {
        Details: error.response?.data,
        Status: error.response?.status
    });
    throw error
    }
};

export const deleteById = async(id) => {
    try {
        const response = api.delete(`delete/${id}`);
        return response.data;
    } catch (error) {
        console.error('[API] Erro em deletar usuario:', {
        Details: error.response?.data,
        Status: error.response?.status
    });
    throw error
    }
}

export const editUser = async(nome, email, telephone) => {
    try {
        const response = api.put('/edit', {
            nome,
            email,
            telephone
        });
        return response.data;
    } catch (error) {
        console.error('[API] Erro em editar dados do usuario:', {
        Details: error.response?.data,
        Status: error.response?.status
    });
    }
}

export const editPasswordUser = async(id, password) => {
    try {
        const response = api.put(`/${id}/ChangePassword`, {
            password
        })
        return response.data;
    } catch (error) {
        console.error('[API] Erro em editar senha de usuario:', {
        Details: error.response?.data,
        Status: error.response?.status
    });
    }
}