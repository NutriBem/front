import './style.css';

import user from '../../../../public/assets/images/customer/user.png';
import emailImg from '../../../../public/assets/images/customer/email.png';
import rgImg from '../../../../public/assets/images/customer/rg.png';
import passwordImg from '../../../../public/assets/images/customer/password.png';
import { useState } from 'react';

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rg, setRg] = useState("");
    const [password, setPassword] = useState("");

    const URL = "http://localhost:8080/customer";

    async function requestData() {
        const response = await fetch(URL, {
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

        console.log(response.status);

//        if (response.status == 200) {
//            const parseJson = await response.json();
//            console.log(parseJson);
//        }

    }

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
                                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digita a senha" name="" id="" />
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