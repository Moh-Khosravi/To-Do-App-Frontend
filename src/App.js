import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/FormLogin.js';
import Register from './components/Register.js';
import MainPage from './components/MainPage.js';
import Home from './components/Home.js';
import { useAppData } from './context/DataStorage.js';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

function App() {
  const { isLoged, setIsLoged, getUser, setList, setUserId } = useAppData();

  function readCookie() {
    const token = Cookies.get('token');
    if (token) {
      setIsLoged(true);
    }
  }
  useEffect(() => {
    readCookie();
  }, []);

  useEffect(() => {
    const id = Cookies.get('user');
    getUser(id);
  });

  return (
    <div className="container-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!isLoged ? <Login /> : <Navigate to="/user" />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/user"
          element={isLoged ? <MainPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
