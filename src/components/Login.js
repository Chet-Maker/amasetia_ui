import React, { useState } from 'react';
import './Component.css';  // Importing the CSS file

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
    
        const data = await response.json();
    
        if (response.ok) {
            // Login was successful
            window.location.href = '/home';  // Navigate to the home page
        } else {
            // Login failed
            alert(data.error);
        }
    };

    return (
        <div className="login-container">
            <h1 className="title">Amasetia</h1>
            <p className="subtitle">Build a mind that understands you.</p>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="input-field"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input-field"
            />
            <button onClick={handleLogin} className="login-button">Login</button>
            <p className="signup-link">Don't have an account? <a href="/signup">Sign up here</a></p>
        </div>
    );
}

export default Login;
