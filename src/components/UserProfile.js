import React from 'react';
import Logo from '../image/Logo-White.png';
import MenuBar from './MenuBar.js';
import { useAppData } from '../context/DataStorage.js';

function UserProfile() {
  const { user } = useAppData();
  return (
    <div>
      <img className="logo2" src={Logo} alt="" />
      <MenuBar />
      <div>
        <h1>User Profile</h1>
        <div style={{ fontSize: '30px' }}>
          <div>Fist name: {user.firstName}</div>
          <div>Last name: {user.lastName}</div>
          <div>Email: {user.email}</div>
          <div>
            Open to dos:{' '}
            {user.todos.filter((todo) => todo.completed === false).length}
          </div>
          <div>
            Completed to dos:{' '}
            {user.todos.filter((todo) => todo.completed === true).length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
