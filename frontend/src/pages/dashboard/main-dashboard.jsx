import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';


export default function Dashboard({ handleLogout }) {
  // protect authentication
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
      <p>Welcome to our Website</p>
      <Link to="/second_dashboard">
        <Button variant="contained">2nd Dashboard</Button>
      </Link>
      <Button onClick={handleLogout}>Sign Out</Button>
    </div>
  );
}
