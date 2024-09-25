// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  return (

    <Router>
      <div>
        <h1>Firebase Auth App</h1>
        <Routes>
          <Route path="/" element={<h1>Hi!</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;