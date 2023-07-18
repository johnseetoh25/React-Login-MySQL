import React, { useEffect } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function SecondDashboard() {
  const { id } = useParams();
  const navigate = useNavigate();

  // protect authenticated
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  useEffect(() => {
    localStorage.setItem('isAuthenticated', 'true');
    return () => {
      localStorage.removeItem('isAuthenticated');
    };
  }, []);

  
  if (isAuthenticated !== 'true') {
    // Redirect the user to the login page
    return <Navigate to="/login" />;
  }

  // navigated to others page
  const navMainDashboard = () => {
    navigate(`/main_dashboard/${id}`);
  }

  return (
    <div>
      <h2>Second Dashboard</h2>
      <Button onClick={navMainDashboard}>Main Dashboard</Button>
    </div>
  )
}
