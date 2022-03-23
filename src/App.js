import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/FormLogin.js';
import Register from './components/Register.js';
import MainPage from './components/MainPage.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="container-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
