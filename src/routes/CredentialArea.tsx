import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './CredentialArea.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye } from '@fortawesome/free-regular-svg-icons';

const CredentialArea: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleLogin() {
        console.log('Login clicked. ');

        // Assuming successful login
        navigate('/dashboard');
    };
    // Assuming successful login, store authentication state
    // if (stayLoggedIn) {
    //     // Store the authentication token or user information in cookies or local storage
    //     // Example using localStorage (for simplicity, consider more secure options in a real app)
    //     localStorage.setItem('token', 'your_authentication_token_here');
    // }
    return (
        <div>
            <form className='credentials'>
                <label>
                    <FontAwesomeIcon icon={faUser} />
                    <input
                        type="text"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='credential'
                    />
                </label>
                <br />
                <label>
                    <FontAwesomeIcon icon={faEye} />
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='credential pass'
                    />
                </label>
            </form>
            <form className='connection'>
                <label>
                    <input
                        type="checkbox"
                    // checked={stayLoggedIn}
                    // onChange={() => setStayLoggedIn(!stayLoggedIn)}
                    />
                    Stay Logged In
                </label>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default CredentialArea;
