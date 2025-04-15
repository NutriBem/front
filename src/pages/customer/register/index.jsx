import './style.css';

import user from '../../../assets/images/customer/user.png';
import email from '../../../assets/images/customer/email.png';
import rg from '../../../assets/images/customer/rg.png';
import password from '../../../assets/images/customer/password.png';

export default function Register() {
    
    return (
        <div className="containerCustomerContainer">
            <div className='content_01'>
                <div className="header">
                    {/* <img src="  " alt="" /> */}
                    <h1>IMG</h1>
                    <h1>NUTRIBEM</h1>
                </div>
                <div className="form">
                    <p>Crie sua conta</p>
                    <div className="form_inputs">
                        <div className="form_input">
                            <div>
                                <p>Nome</p>
                                <div className="input">
                                    <input type="text" placeholder="fulano de tal" name="" id="" />
                                    <div>
                                        <img src={user} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>E-mail</p>
                                <div className="input">
                                    <input type="text" placeholder="fulano@gmail.com" name="" id="" />
                                    <div>
                                        <img src={email} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form_input">
                            <div>
                                <p>RG</p>
                                <div className="input">
                                    <input type="text" placeholder="12.345.678-X" name="" id="" />
                                    <div>
                                        <img src={rg} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Senha</p>
                                <div className="input">
                                    <input type="text" placeholder="Digita a senha" name="" id="" />
                                    <div>
                                        <img src={password} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button_sign_or_login">
                        <button id="register">Cadastrar</button>
                        <div className="line">
                            <div></div>
                            <p>OU</p>
                            <div></div>
                        </div>
                        <button id="login" >Login</button>
                    </div>
                </div>
            </div>
            <div className='content_02'>
                <img src="" alt="" />
            </div>
        </div>
    );
}