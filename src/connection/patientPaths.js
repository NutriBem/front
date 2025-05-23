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
    throw error
  }
};

export const getPatientByCpf = async(cpf) => {
  try{
    const response = await api.get(`/patient/${cpf}`);
    return response.data;
  } catch (error){
    console.error('[API] Erro ao buscar paciente:', {
      Details: error.response?.data,
      Status: error.response?.status
    });
    throw error;
  }
};

export const getAllPatients = async() => {
  try{
    const response = await api.get('/patient');
    return response.data;
  } catch (error){
    console.error('[API] Erro ao buscar todos pacientes:', {
      Details: error.response?.data,
      Status: error.response?.status
    });
    throw error;
  }
};


