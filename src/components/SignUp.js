import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url("path/to/your/image.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignUpBox = styled.div`
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

const SignUpButton = styled.button`
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

const BackToLoginButton = styled.button`
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

function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make sure the URL corresponds to your server's registration endpoint
      const { data } = await axios.post('http://localhost:3000/Register', {
        username: username,
        email: email,
        password: password,
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      alert('Signup Successful!');
      navigate('/Login');
    } catch (error) {
      console.log(error);
      // You might want to provide a more user-friendly error message here
      alert('Error signing up. Please try again.');
    }
  }

  return (
    <Container>
      <SignUpBox>
        <h1>Welcome to BANK OF BHARATH</h1>
        <div className="form-group">
          <label>Username:</label>
          <FormInput type="text" value={username} onChange={handleUsername} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <FormInput type="email" value={email} onChange={handleEmail} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <FormInput type="password" value={password} onChange={handlePassword} />
        </div>
        <div className="form-group">
          <SignUpButton onClick={handleSubmit}>Sign Up</SignUpButton>
        </div>
        <div className="form-group">
          <p>Already have an account? Click here to <BackToLoginButton onClick={() => navigate('/')}>Login</BackToLoginButton></p>
        </div>
      </SignUpBox>
    </Container>
  );
}

export default SignUp;
  