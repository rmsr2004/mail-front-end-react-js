import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './BackButton.css';

const BackButton = () => {
    return (
        <Link to="/" className="back-button">
            <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
    );
};

export default BackButton;