import React from 'react';
import { useAppData } from '../context/DataStorage.js';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

function Logout() {
  const navigate = useNavigate();
  const { setUserId, setList, setUserName } = useAppData();

  function handleLogout() {
    sessionStorage.clear();
    setUserId('');
    setUserName('');
    setList([]);
    navigate('/');
  }

  return (
    <div title="Sign out" className="container-logout">
      <FiLogOut onClick={handleLogout} />
    </div>
  );
}

export default Logout;
