import React, { useState } from 'react';
import './Component.css'; // Make sure this is the correct path to your CSS file

function UserProfile() {
    // State hooks for each trait
    const [extraversion, setExtraversion] = useState('');
    const [introversion, setIntroversion] = useState('');
    const [sensing, setSensing] = useState('');
    const [intuition, setIntuition] = useState('');
    const [thinking, setThinking] = useState('');
    const [feeling, setFeeling] = useState('');
    const [judging, setJudging] = useState('');
    const [perceiving, setPerceiving] = useState('');

    const handleProfileSubmit = async () => {
        // Replace '/api/userprofile' with the correct endpoint for your API
        try {
            const response = await fetch('/api/userprofile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    extraversion,
                    introversion,
                    sensing,
                    intuition,
                    thinking,
                    feeling,
                    judging,
                    perceiving,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                // Handle successful submission, e.g., notify user or redirect
                window.location.href = '/home'
            } else {
                // Handle errors, e.g., display a message to the user
                alert(data.error || 'An error occurred while updating the profile.');
            }
        } catch (error) {
            console.error('Error submitting profile:', error);
            alert('An error occurred while submitting the profile.');
        }
    };

    // The form inputs are given the 'input-field' class for styling
    return (
        <div className="login-container">
            <div className="title">Enter Your Scores</div>
            <input
                className="input-field"
                type="number"
                value={extraversion}
                onChange={(e) => setExtraversion(e.target.value)}
                placeholder="Extraversion"
            />
            <input
                className="input-field"
                type="number"
                value={introversion}
                onChange={(e) => setIntroversion(e.target.value)}
                placeholder="Introversion"
            /> 
            <input
                className="input-field"
                type="number"
                value={sensing}
                onChange={(e) => setSensing(e.target.value)}
                placeholder="Sensing"
            />
            <input
                className="input-field"
                type="number"
                value={intuition}
                onChange={(e) => setIntuition(e.target.value)}
                placeholder="Intuition"
            />
            <input
                className="input-field"
                type="number"
                value={thinking}
                onChange={(e) => setThinking(e.target.value)}
                placeholder="Thinking"
            />
            <input
                className="input-field"
                type="number"
                value={feeling}
                onChange={(e) => setFeeling(e.target.value)}
                placeholder="Feeling"
            />
            <input
                className="input-field"
                type="number"
                value={judging}
                onChange={(e) => setJudging(e.target.value)}
                placeholder="Judging"
            />
            <input
                className="input-field"
                type="number"
                value={perceiving}
                onChange={(e) => setPerceiving(e.target.value)}
                placeholder="Perceiving"
            />
            <button className="login-button" onClick={handleProfileSubmit}>Submit</button>
        </div>
    );
}

export default UserProfile;