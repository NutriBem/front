import api from "../config/axiosConfig";

export const getById = async (id) => {
    try {
        const response = await api.get(`id/${id}`);
        return response.data
    } catch (error) {
        console.error('[API] Erro em achar usuario por id:', {
            Details: error.response?.data,
            Status: error.response?.status
        });
        throw error
    }
}

export const loginUser = async (email, password) => {
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

export const deleteById = async (id) => {
    try {
        const response = await api.delete(`delete/${id}`);
        return response.data;
    } catch (error) {
        console.error('[API] Erro em deletar usuario:', {
            Details: error.response?.data,
            Status: error.response?.status
        });
        throw error
    }
}

export const editUser = async (nome, email, telephone) => {
    try {
        const response = await api.put('/edit', {
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

export const editPasswordUser = async (id, password) => {
    try {
        const response = await api.put(`/${id}/ChangePassword`, {
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

export const addImagePerson = async (file, id) => {
    try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await api.post(`/image/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data;
    } catch (error) {
        console.error('[API] Erro em inserir a imagem do usuario:', {
            Details: error.response?.data,
            Status: error.response?.status
        });
    }
}

export const getImagePerson = async (id) => {
    try {
        const response = await api.get(`/image/search/${id}`, {
            responseType: 'blob'
        });

        const blob = URL.createObjectURL(response.data);
        return blob;
    } catch (error) {   
        console.error('[API] Erro em inserir a imagem do usuario:', {
            Details: error.response?.data,
            Status: error.response?.status
        });
    }
}
