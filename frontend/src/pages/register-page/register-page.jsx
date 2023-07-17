import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function RegisterPage() {

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleRegister = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitRegister = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/users", userData);
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
    
  };

  const { username, email, password } = userData;
  console.log(userData);

  return (
    <div>
      <h2>Register Page</h2>
      <TextField
        label="Username"
        name="username"
        value={username}
        onChange={handleRegister}
      />
      <br />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={handleRegister}
      />
      <br />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={handleRegister}
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleSubmitRegister}>
        Register
      </Button>
      <br />
      <Link to="/">Already have an account? Login here</Link>
    </div>
  )
}
