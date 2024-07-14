import React from 'react';
import { Link } from 'react-router-dom';

import './MainPage.css';

const MainPage = () => {
    return (
        <div className='main-page'>
            <div className='main-page-card'>
                <h2>Welcome!</h2>
                <div className='main-page-buttons'>
                    <Link to="/login"> 
                        <button>Login</button>
                    </Link>

                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainPage;