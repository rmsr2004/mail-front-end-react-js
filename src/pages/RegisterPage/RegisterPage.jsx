import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./RegisterPage.css";

import {register} from "../../services/authServices.js";
import BackButton from "../../components/BackButton/BackButton";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await register(name, email, password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='register-page'>
            <div className='register-page-card'>
                <div className='register-page-header'>
                    <h2>REGISTER</h2>
                    <BackButton className='get-back-button'/>
                </div>

                <form className='register-page-form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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

                    <button className='register-button' type="submit">Register</button>
                </form>
            </div>
        </div>
    )

}


export default RegisterPage;