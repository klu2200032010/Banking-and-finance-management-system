// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/MainSection';
import SignUp from './components/SignUp';
import Banner from './components/Banner';
import Links from './components/Links';
import Online from './components/Online';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MainSection" element={<Home />} />
        <Route path="/Banner" element={<Banner />}  />
        <Route path="/Links" element={<Links />}  />
        <Route path="/Online" element={<Online />}  />
      
      </Routes>
    </Router>
  );
};

export default App;
