import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./LoginPage.css";

import {login} from "../../services/authServices.js";
import BackButton from "../../components/BackButton/BackButton";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await login(email, password);
            navigate('/inbox');
        } catch (error) {
            setError(error.message);
        }
    };

    return(
        <div className='login-page'>
            <div className='login-page-card'>
                <div className='login-page-header'>
                    <h2>LOGIN</h2>
                    <BackButton className='get-back-button'/>
                </div>
                <form className='login-page-form' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        vakue={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <p className='error'>{error}</p>}

                    <div className='login-page-buttons'>
                        <button type="submit">Login</button>

                        <Link to="/register">
                            <button type="button">Register</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default LoginPage;