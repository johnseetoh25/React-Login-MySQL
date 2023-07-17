import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function HomePage() {
  return (
    <div>
      <h2>HomePage</h2>
        <Link to={'/login'}><Button variant='outlined'>Login</Button></Link>
    </div>
  );
}
