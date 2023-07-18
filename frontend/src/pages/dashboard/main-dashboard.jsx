import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function MainDashboard({ handleLogout }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // protect authentication
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  useEffect(() => {
    localStorage.setItem('isAuthenticated', 'true');
    return () => {
      localStorage.removeItem('isAuthenticated');
    };
  }, []);

  // fetching user's data after user login and authenticated
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/users/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (isAuthenticated === 'true') {
      fetchUserData();
    }
  }, [isAuthenticated, id]);

  // navigated to others page
  const navSecondDashboard = () => {
    navigate(`/second_dashboard/${id}`);
  }

  //protect authenticated
  if (isAuthenticated !== 'true') {
    // Redirect the user to the login page
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Main Dashboard</h2>
      <p>Hello, {userData.username}</p>
      <p>{userData.email}</p>
      <Button variant="contained" onClick={navSecondDashboard}>2nd Dashboard</Button>
      <Button onClick={handleLogout}>Sign Out</Button>
    </div>
  );
}
