
import './cadastroNutri.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';
import ApiService from '../../../../connection/ApiService';

function CadastroNutri() {

  const [formData, setFormData] = useState({
          crm: "",
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

  const RegisterNutricionist = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await ApiService.nutricionist.register(
                formData.crm,
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
     <div className="container-cadastroNutri">
      <LoadingBar color="#A0C71C" ref={ref} />
      <Header />

      <main className="conteudo-principal-cadastroNutri">
        <div className="cartao-formulario-cadastroNutri">
          <h2 className="titulo-formulario-cadastroNutri">Cadastro de Nutricionista</h2>

          <form className="grade-formulario-cadastroNutri" onSubmit={RegisterNutricionist}>
            <div className="grupo-formulario-cadastroNutri">
              <label>Nome</label>
              <input type="text" placeholder="Digite o nome do nutricionista" value={formData.name} onChange={handleChange} required/>
            </div>
            <div className="grupo-formulario-cadastroNutri">
              <label>Email</label>
               <input type="email" placeholder="Digite Email do nutricionista" value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="grupo-formulario-cadastroNutri">
              <label>Senha</label>
               <input type="password" placeholder="Digite a senha do nutricionista" value={formData.password} onChange={handleChange} required/>
            </div>
            <div className="grupo-formulario-cadastroNutri">
              <label>Telefone</label>
               <input type="tel" placeholder="Digite o telefone do nutricionista" value={formData.telephone} onChange={handleChange} required/>
            </div>
            <div className="grupo-formulario-cadastroNutri full-width">
              <label>CRM</label>
              <input type="text" placeholder="Digite o CRM do nutricionista" value={formData.crm} onChange={handleChange} required/>
            </div>

            <div className="grupo-formulario-cadastroNutri full-width">
              <button type="submit" className="botao-submit-cadastroNutri" disabled={loading}>
                 {loading ? 'Registering...' : 'Cadastro Nutricionista'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default CadastroNutri;
