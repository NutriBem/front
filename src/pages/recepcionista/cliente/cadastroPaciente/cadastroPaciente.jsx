import './cadastroPaciente.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';
import { toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';
import ApiService from '../../../../connection/ApiService';

function CadastroPaciente() {

  const [formData, setFormData] = useState({
          cpf: "",
          name: "",
          email: "",
          password: "",
          telephone: ""
      });
    
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

      const RegisterPatient = async (e) => {
        e.preventDefault();
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
            toast.success('Registration successful!')
        } catch (error) {
            setError(error.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="container-cadastroPaciente">
      <LoadingBar color="#A0C71C" ref={ref} />
      <Header />

      <main className="main-content-cadastroPaciente">
        <div className="form-card-cadastroPaciente">
          <h2 className="form-title-cadastroPaciente">Cadastrar Paciente</h2>

          <form className="form-grid-cadastroPaciente" onSubmit={RegisterPatient}>
            <div className="form-group-cadastroPaciente">
              <label>Nome</label>
              <input type="text" placeholder="Digite o nome do paciente" value={formData.name} onChange={handleChange} required/>
            </div>

            <div className="form-group-cadastroPaciente">
              <label>Email</label>
              <input type="email" placeholder="Digite Email do paciente" value={formData.email} onChange={handleChange} required/>
            </div>

            <div className="form-group-cadastroPaciente">
              <label>Senha</label>
              <input type="password" placeholder="Digite a senha do paciente" value={formData.password} onChange={handleChange} required/>
            </div>

            <div className="form-group-cadastroPaciente">
              <label>Telefone</label>
              <input type="tel" placeholder="Digite o telefone do paciente" value={formData.telephone} onChange={handleChange} required/>
            </div>

            <div className="form-group-cadastroPaciente full-width-cadastroPaciente">
              <label>CPF</label>
              <input type="text" placeholder="Digite o CPF do paciente" value={formData.cpf} onChange={handleChange} required/>
            </div>

            <div className="form-group-cadastroPaciente full-width-cadastroPaciente">

               {error && <div className="error-message">{error}</div>}

              <button type="submit" className="submit-btn-cadastroPaciente" disabled={loading}>
                 {loading ? 'Registering...' : 'Cadastro'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CadastroPaciente;
