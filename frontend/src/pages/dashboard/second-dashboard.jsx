import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function SecondDashboard() {

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
      <h2>Second Dashboard</h2>
      <Link to={'/main_dashboard'}><Button>Main Dashboard</Button></Link>
    </div>
  )
}
