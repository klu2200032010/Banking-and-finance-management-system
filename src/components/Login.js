import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url("D:\MERN\MERN Project sdp\bank.webp");
  background-size: cover;
  background-color: yellow ;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
`;

const LoginButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    background-color: #218838;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;

  &:hover {
    text-decoration: none;
  }
`;

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('http://localhost:3000/login', {
        username: username,
        password: password,                                                     
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      alert('Login Successful!');
      navigate('/MainSection');
    } catch (error) {
      
    }
  }
  

  

  return (
    <Container>
      <LoginBox>
        <h1>Welcome to BANK OF Ram</h1>
        <div className="form-group">
          <label>Username:</label>
          <FormInput type="text" value={username} onChange={handleUsername} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <FormInput type="password" value={password} onChange={handlePassword} />
        </div>
        <div className="form-group">
          <LoginButton onClick={handleSubmit}>Login</LoginButton>
        </div>
        <div className="form-group">
          <p>Don't have an account? Click here to <ToggleButton onClick={() => navigate('/Signup')}>Signup</ToggleButton></p>
        </div>
      </LoginBox>
    </Container>
  );
}

export default Login;
