import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/FormLogin.js';
import Register from './components/Register.js';
import SignInSignUp from './components/SignInSignUp.js';
import MainPage from './components/MainPage.js';

function App() {
  return (
    <div className="container-app">
      <Routes>
        <Route path="/" element={<SignInSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
