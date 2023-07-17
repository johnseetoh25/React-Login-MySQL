import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import HomePage from './pages/home-page/home-page';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
