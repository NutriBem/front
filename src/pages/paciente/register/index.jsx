import { useState } from 'react';
import ApiService from '../../../connection/ApiService';
import { images, icons, logos } from '../../../config/assets'
import './style.css';
import 'animate.css';

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRegister = async (e) => {
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
            alert('Registration successful!');
        } catch (error) {
            setError(error.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <img src={logos.nutriBem} alt="Logo NutriBem" className="logo" />
                <p className="brand-name">NUTRIBEM</p>
                <h2>Create your account</h2>

                <form className="register-form" onSubmit={handleRegister}>
                    <div className="form-row">
                        <div className="input-group">
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                placeholder="Name"
                                required
                            />
                            <img src={images.user} alt="User icon" />
                        </div>

                        <div className="input-group">
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="E-mail"
                                required
                            />
                            <img src={images.email} alt="Email icon" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-group">
                            <input
                                name="cpf"
                                value={formData.cpf}
                                onChange={handleChange}
                                type="text"
                                placeholder="CPF"
                                required
                            />
                            <img src={images.user} alt="CPF icon" />
                        </div>

                        <div className="input-group">
                            <input
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Enter your password"
                                required
                            />
                            <img
                                src={passwordVisible ? icons.eyeOpen : icons.eyeClosed}
                                alt="Toggle password"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <input
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            type="tel"
                            placeholder="Telephone"
                            required
                        />
                        <img src={images.user} alt="Phone icon" />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="btn-register" disabled={loading}>
                        {loading ? 'Registering...' : 'Sign up now'}
                    </button>

                    <button type="button" className="btn-login">
                        Log in now
                    </button>
                </form>
            </div>
        </div>
    );
}
