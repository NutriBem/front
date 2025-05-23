import api from "../config/axiosConfig";

export const register = async (crm, cpf, name, email, password, telephone) => {
  try {
    const response = await api.post('/nutritionist', {
      crm,
      cpf,
      name, 
      email,
      password,
      telephone
    });
    return response.data;
  } catch (error) {
    console.error('[API] Erro no register:', {
      Details: error.response?.data,
      Status: error.response?.status
    });
    throw error
  }
};

export const getByCrm = async (crm) => {
    try {
        const response = await api.get(`/crm/${crm}`);
        return response.data;
    } catch (error) {
      console.error('[API] Erro em achar nutricionista:', {
      Details: error.response?.data,
      Status: error.response?.status
    });
    throw error
    }
} 

export const GetAllNutritionists = async () => {
    try {
        const response = await api.get('/nutritionist');
        return response.data;
    } catch (error) {
      console.error('[API] Erro em achar nutricionistas:', {
      Details: error.response?.data,
      Status: error.response?.status
    });
    throw error
    }
}

