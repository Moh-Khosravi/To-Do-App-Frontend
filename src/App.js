import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/FormLogin.js';
import Register from './components/Register.js';
import MainPage from './components/MainPage.js';
import Home from './components/Home.js';
import { useAppData } from './context/DataStorage.js';

function App() {
  const { isLoged } = useAppData();

  return (
    <div className="container-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/user"
          element={isLoged ? <MainPage /> : <Navigate replace to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
