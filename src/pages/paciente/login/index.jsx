import React, { useState } from 'react';
import { icons, logos } from '../../../config/assets';
import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <main className="container">
            <div className="login-box">
                <img src={logos.nutriBem} alt="Logo NutriBem" className="logo" />
                <p className="brand-name">NUTRIBEM</p>
                <h5 className="subtitle">Login into your account</h5>

                <form className="login-form">
                    <label>
                        <p>Username</p>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Enter your username" 
                        />
                    </label>

                    <label className="password-wrapper">
                        <p>Password</p>
                        <input
                            name="password"
                            type={passwordVisible ? "text" : "password"}
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

                    <button type="submit" className="login-btn">Login now</button>

                    <div className="separator">
                        <hr />
                        <span>or</span>
                        <hr />
                    </div>
                    
                    <Link to={"/register"}><button type="button" className="signup-btn">Sign up now</button></Link>
                    
                </form>
            </div>
        </main>
    );
}
