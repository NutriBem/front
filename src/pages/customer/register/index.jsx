import { useState } from 'react';
import ApiService from '../../../connection/ApiService';
import { images, icons, logos } from '../../../config/assets'
import './style.css';

export default function Register() {
    const [formData, setFormData] = useState({
        cpf: "",
        name: "",
        email: "",
        password: "",
        telephone: ""
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Manipulador genérico pa todos os campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    
const handleRegister = async (e) => {
  e.preventDefault();
  console.log('Dados do formulário:', formData);
  
  setLoading(true);
  setError(null);

  try {
    const response = await ApiService.patient.register(
      formData.cpf,
      formData.name,
      formData.email,
      formData.password,
      formData.telephone
    );
    
    console.log('Sucesso:', response);
    alert('Cadastro realizado com sucesso!');
    
    
  } catch (error) {
    console.error('Erro completo:', error);
    setError(error.response?.data?.message || 'Erro ao cadastrar');
  } finally {
    setLoading(false);
  }
};

    return (
        <div className="containerCustomerContainer">
            <div className='content_01'>
                <div className="header">
                    <div>
                        <img src={logos.nutriBem} alt="Logo NutriBem" />
                        <p>NUTRIBEM</p>
                    </div>
                    <p>Crie sua conta</p>
                </div>

                <form className="form" onSubmit={handleRegister}>
                    <div className="form_inputs">
                      
                        <div className="form_input">
                            <div>
                                <label>Nome Completo</label>
                                <div className="input">
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Fulano de Tal"
                                        required
                                    />
                                    <img src={images.user} alt="Ícone de usuário" />
                                </div>
                            </div>

                            <div>
                                <label>E-mail</label>
                                <div className="input">
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="fulano@gmail.com"
                                        required
                                    />
                                    <img src={images.email} alt="Ícone de email" />
                                </div>
                            </div>
                        </div>

                        <div className="form_input">
                            <div>
                                <label>CPF</label>
                                <div className="input">
                                    <input
                                        name="cpf"
                                        value={formData.cpf}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="000.000.000-00"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label>Senha</label>
                                <div className="input">
                                    <input
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        type={passwordVisible ? "text" : "password"}
                                        placeholder="Digite sua senha"
                                        required
                                    />
                                    <img 
                                        id='eye'
                                        src={passwordVisible ? icons.eyeOpen : icons.eyeClosed} 
                                        alt="Mostrar senha"
                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label>Telefone</label>
                                <div className="input">
                                    <input
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="(00) 00000-0000"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <div className="button_sign_or_login">
                        <button 
                            type="submit" 
                            id="register" 
                            disabled={loading}
                        >
                            {loading ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
                        
                        <div className="line">
                            <div></div>
                            <p>OU</p>
                            <div></div>
                        </div>
                        
                        <button type="button" id="login">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            
            <div className='content_02'>
                {/*imagem para decorar */}
            </div>
        </div>
    );
}