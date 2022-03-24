import React from 'react';
import { useAppData } from '../context/DataStorage.js';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import Cookies from 'js-cookie';

function Logout() {
  const navigate = useNavigate();
  const { setUserId, setList, setUserName, setIsLoged } = useAppData();

  function handleLogout() {
    sessionStorage.clear();
    setUserId('');
    setUserName('');
    setList([]);
    setIsLoged(false);
    Cookies.remove('token');
    navigate('/');
  }

  return (
    <div title="Sign out" className="container-logout">
      <FiLogOut onClick={handleLogout} />
    </div>
  );
}

export default Logout;
