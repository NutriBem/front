import React, { useState, useRef } from "react";
import './cadastroNutri.css';
import Header from '../../../../components/compRecepcionista/compRecepcionista';
import ApiService from '../../../../connection/ApiService';
import LoadingBar from 'react-top-loading-bar';
import { toast } from "react-toastify";

function CadastroNutri() {

  const [crm, setCrm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  // const [formData, setFormData] = useState({
  //         crm: "",
  //         name: "",
  //         email: "",
  //         password: "",
  //         telephone: ""
  //     });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const ref = useRef();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
  // };

  const RegisterNutricionist = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log(telephone)
      const response = await ApiService.nutricionist.register( //crm, cpf, name, email, password, telephone
        crm,
        name,
        email,
        password,
        telephone
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
              <input type="text" placeholder="Digite o nome do nutricionista" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="grupo-formulario-cadastroNutri">
              <label>Email</label>
              <input type="email" placeholder="Digite Email do nutricionista" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="grupo-formulario-cadastroNutri">
              <label>Senha</label>
              <input type="password" placeholder="Digite a senha do nutricionista" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="grupo-formulario-cadastroNutri">
              <label>Telefone</label>
              <input type="tel" placeholder="Digite o telefone do nutricionista" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
            </div>
            <div className="grupo-formulario-cadastroNutri full-width">
              <label>CRM</label>
              <input type="text" placeholder="Digite o CRM do nutricionista" value={crm} onChange={(e) => setCrm(e.target.value)} required />
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="grupo-formulario-cadastroNutri full-width">
              <button onClick={(e) => RegisterNutricionist(e)} type="submit" className="botao-submit-cadastroNutri" disabled={loading}>
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
