import api from "../config/axiosConfig";

export const register = async (cpf, name, email, password, telephone) => {
  try {
    const response = await api.post('/patient', {
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
    throw error;
  }
};