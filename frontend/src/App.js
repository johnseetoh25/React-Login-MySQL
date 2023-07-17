import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import HomePage from './pages/home-page/home-page';
import LoginPage from './pages/login-page/login-page';
import RegisterPage from './pages/register-page/register-page';
import MainDashboard from './pages/dashboard/main-dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleStillLogin = () => {
    // Perform login logic
    // After successful login, set isAuthenticated to true and store it in local storage
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    // Perform logout logic
    // Clear the authentication status from local storage and set isAuthenticated to false
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route 
            path='login'
            element={<LoginPage setIsAuthenticated={setIsAuthenticated} 
                                handleStillLogin={handleStillLogin}
                    />}
          />
          <Route path='register' element={<RegisterPage/>} />
          <Route 
            path='main_dashboard' 
            element={<MainDashboard isAuthenticated={isAuthenticated} 
                                    handleLogout={handleLogout}
                    />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
