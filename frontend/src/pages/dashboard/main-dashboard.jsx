import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';

export default function MainDashboard({ handleLogout }) {

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

  return (
    <div>
      <h2>Main Dashboard</h2>
      <Link to="/dashboard">
        <Button variant="contained">Dashboard 2</Button>
      </Link>
      
        <Button onClick={handleLogout}>Sign Out</Button>
    </div>
  );
}
