import React, { useState } from 'react';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
    
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    email,
                    birthDate
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Signup was successful
                console.log('Signup successful', data);
                // You can redirect the user or clear the form, handle as needed
            } else {
                // Signup failed
                alert(data.error || 'An error occurred during signup.');
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('An error occurred during signup.');
        }
    };


    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="birth_date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                placeholder="Birth Date"
            />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
}

export default Signup;
