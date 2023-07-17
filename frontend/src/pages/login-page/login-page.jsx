import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const LoginPage = ({ setIsAuthenticated, handleStillLogin }) => {
  const [userLogin, setUserLogin] = useState({
    username: '',
    password: '',
  });
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  const handleLoginInputChange = (e) => {
    setUserLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8800/auth/login', userLogin);
      // Add code to handle successful login, such as storing the token in local storage or updating the state to indicate the user is logged in.
      console.log(response.data);
      if (response.data) {
        handleStillLogin();
        setIsAuthenticated(true);
        setRedirectToDashboard(true);
        //navigate('/main_dashboard');
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  if (redirectToDashboard) {
    return <Navigate to="/main_dashboard" />;
  }

  console.log(userLogin);

  return (
    <div>
      <h2>Login</h2>
      <TextField
        label="Username"
        name="username"
        value={userLogin.username}
        onChange={handleLoginInputChange}
      />
      <br />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={userLogin.password}
        onChange={handleLoginInputChange}
      />
     
      <br/>
      <Link to={'/'}>Back</Link>
      <Button variant="contained" onClick={handleLogin}>Login</Button>
      <Link to={'/register'}><Button>Sign Up</Button></Link>
      
    </div>
  );

}

export default LoginPage;
