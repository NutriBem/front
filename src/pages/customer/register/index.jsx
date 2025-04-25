import './style.css';

import user from '../../../../public/assets/images/customer/user.png';
import emailImg from '../../../../public/assets/images/customer/email.png';
import rgImg from '../../../../public/assets/images/customer/rg.png';
import passwordImg from '../../../../public/assets/images/customer/password.png';
import nutriBem from '../../../../public/logoNutriBem.svg';
import eyeOpen from '../../../assets/images/eye-open.svg';
import eyeClosed from '../../../assets/images/eye-closed.svg';

import { useState } from 'react';

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rg, setRg] = useState("");
    const [password, setPassword] = useState("");

    let [typeInputPassword, setTypeInputPassword] = useState({ show: false, type: "password", img: eyeClosed });

    const changeTypeInputPassword = () => {
        if (!typeInputPassword.show) {
            let newState = { ...typeInputPassword, show: true, type: "text", img: eyeOpen };
            setTypeInputPassword(newState);
            return;
        }

        let newState = { ...typeInputPassword, show: false, type: "password", img: eyeClosed };
        setTypeInputPassword(newState);
    }

    const URL = "http://localhost:8080/customer";

    async function requestData() {
        await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                email: email,
                rg: rg,
                password: password
            })
        })
    }

    return (
        <div className="containerCustomerContainer">
            <div className='content_01'>
                <div className="header">
                    <div>
                        <img src={nutriBem} alt="" />
                        <p>NUTRIBEM</p>
                    </div>
                    <p>Crie sua conta</p>
                </div>
                <div className="form">
                    <div className="form_inputs">
                        <div className="form_input">
                            <div>
                                <p>Nome</p>
                                <div className="input">
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="fulano de tal" name="" id="" />
                                    <div>
                                        <img src={user} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>E-mail</p>
                                <div className="input">
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="fulano@gmail.com" name="" id="" />
                                    <div>
                                        <img src={emailImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form_input">
                            <div>
                                <p>RG</p>
                                <div className="input">
                                    <input type="text" value={rg} onChange={(e) => setRg(e.target.value)} placeholder="12.345.678-X" name="" id="" />
                                    <div>
                                        <img src={rgImg} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Senha</p>
                                <div className="input">
                                    <input type={typeInputPassword.type} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digita a senha" name="" id="" />
                                    <img id='eye' src={typeInputPassword.img} alt="" onClick={() => changeTypeInputPassword()} />
                                    <div>
                                        <img src={passwordImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button_sign_or_login">
                        <button id="register" onClick={() => requestData()} >Cadastrar</button>
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