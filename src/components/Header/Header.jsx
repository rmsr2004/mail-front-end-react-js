import React from 'react';

import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faFilter, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../services/authServices';

import './Header.css';

const Header = () => {
    const navigate = useNavigate();  

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error('Error during logout', error);
        }
    };

    return (
        <div className="task-bar">
            <div className="task-bar-left">
                <button className="task-bar-button">
                    <FontAwesomeIcon icon={faPen} />
                </button>
                <button className="task-bar-button">
                    <FontAwesomeIcon icon={faFilter} />
                </button>
            </div>
            <div className="task-bar-right">
                <button className="task-bar-button" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </button>
            </div>
        </div>
    );
};

export default Header;
