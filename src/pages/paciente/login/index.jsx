import React, { useState, useRef } from "react";
import { icons, logos } from "../../../config/assets";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { toast } from "react-toastify";
import ApiService from "../../../connection/ApiService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const ref = useRef();
  const navigate = useNavigate();

  async function LoginUser(e) {
    e.preventDefault();
    ref.current.continuousStart();
    setCarregando(true);

    try {
      const response = await ApiService.person.loginUser(email, senha); // o retorno é assim "data": "3d422a7c-8317-414a-b35f-96ecd146ebf7","error": ""

      if (response && response.data) {
        const token = response.data;

        localStorage.setItem("user-token", token);
        localStorage.setItem("user-email", email);

        //qual user
        const userWho = await ApiService.person.getById(token); //passar como argumento o id
        const userType = userWho.type;

        console.log("qual tipo de usuario " + userType)

        localStorage.setItem("user-type", userType);

        switch (userType) {
          case 1: // Patient
            setTimeout(() => {
              navigate("/");
            }, 3000);
            break;
          case 2: // Nutritionist
            setTimeout(() => {
              navigate("/");
            }, 3000);
            break;
          case 3: // Recepcionist
            setTimeout(() => {
              navigate("/");
            }, 3000);
            break;
          default:
            window.Location.reload();
        }

        toast.success("Login realizado com sucesso!");
      } else {
        console.log("erro do else");
        throw new Error("Resposta da Não tem nada de dados");
      }
    } catch (error) {
      ref.current.complete();
      setCarregando(false);
      toast.error(error.message);

      console.log(error.message);
      if (error.response?.status === 400) {
        setErro(error.response.data.erro);
      } else {
        toast.error("Usuário não logado, tente novamente");
      }
    }
  }

  return (
    <main className="container">
      <LoadingBar color="#A0C71C" ref={ref} />
      <div className="login-box">
        <img src={logos.nutriBem} alt="Logo NutriBem" className="logo" />
        <p className="brand-name">NUTRIBEM</p>
        <h5 className="subtitle">Login into your account</h5>

        <form className="login-form" onSubmit={LoginUser}>
          <label>
            <p>Email</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              required
            />
          </label>

          <label className="password-wrapper">
            <p>Password</p>
            <input
              name="password"
              type={passwordVisible ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <img
              src={passwordVisible ? icons.eyeOpen : icons.eyeClosed}
              alt="Toggle password"
              className="toggle-password"
              onClick={() => setPasswordVisible(!passwordVisible)}
            />
          </label>

          {erro && <div className="error-message">{erro}</div>}

          <button type="submit" className="login-btn" disabled={carregando}>
            {carregando ? "Loading..." : "Login now"}
          </button>

          <div className="separator">
            <hr />
            <span>or</span>
            <hr />
          </div>

          <Link to={"/register"}>
            <button type="button" className="signup-btn">
              Sign up now
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
}
