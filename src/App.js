import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/FormLogin.js';
import Register from './components/Register.js';
import MainPage from './components/MainPage.js';
import Home from './components/Home.js';
import { useAppData } from './context/DataStorage.js';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import UserProfile from './components/UserProfile.js';

function App() {
  const { isLoged, setIsLoged, getUser } = useAppData();

  function readCookie() {
    const token = Cookies.get('token');
    if (token) {
      setIsLoged(true);
    }
  }
  useEffect(() => {
    const id = Cookies.get('user');

    if (id) {
      readCookie();
      getUser(id);
    }
  }, []);

  return (
    <div className="container-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!isLoged ? <Login /> : <Navigate to="/todos" />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/todos"
          element={isLoged ? <MainPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/user"
          element={isLoged ? <UserProfile /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
