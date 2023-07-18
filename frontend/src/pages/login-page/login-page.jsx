import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, IconButton, TextField } from '@mui/material';
import { Home } from '@mui/icons-material';

const LoginPage = ({ setIsAuthenticated, handleStillLogin }) => {
  const [userLogin, setUserLogin] = useState({
    username: '',
    password: '',
  });
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const navigate = useNavigate();

  // catch the user's insert their username and password
  const handleLoginInputChange = (e) => {
    setUserLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // console log output
  console.log(userLogin);

  // user clicked on login
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
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('id', response.data.id); // Set the ID in local storage
        navigate(`/main_dashboard/${response.data.id}`); // Pass the ID as a route parameter
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  // if user insert correct for their username and password, then can directed to 'main dashboard' 
  if (redirectToDashboard) {
    return <Navigate to="/main_dashboard" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <TextField
        label="Username"
        name="username"
        value={userLogin.username}
        onChange={handleLoginInputChange}
        sx={{ marginTop: 2,marginBottom: 1 }}
      />
      <br />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={userLogin.password}
        onChange={handleLoginInputChange}
        sx={{ marginTop: 1, marginBottom: 2 }}
      />
     
      <br/>
      <Link to={'/'}><IconButton><Home/></IconButton></Link>
      <Button variant="contained" onClick={handleLogin}>Login</Button>
      <Link to={'/register'}><Button>Sign Up</Button></Link>
      
    </div>
  );

}

export default LoginPage;
