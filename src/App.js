import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import Home from './components/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const authenticate = () => {
    setIsAuthenticated(true);
    navigate('/home');
  };

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Home /> : <Login authenticate={authenticate} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;