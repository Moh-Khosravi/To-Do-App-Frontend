import React, { useState } from 'react';
import { FaBars, FaRegUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { useAppData } from '../context/DataStorage.js';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../scss/MenuBar.scss';
import { RiTodoLine } from 'react-icons/ri';

function MenuBar() {
  const navigate = useNavigate();
  const { setUserId, setList, setUser, setIsLoged } = useAppData();
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  function handleLogout() {
    sessionStorage.clear();
    setUserId('');
    setUser('');
    setList([]);
    setIsLoged(false);
    Cookies.remove('token ToDo');
    Cookies.remove('user ToDo');
    navigate('/');
  }

  function handleProfile() {
    navigate('/user');
  }

  function handleToDo() {
    navigate('/todos');
  }
  return (
    <div>
      <div className="navbar">
        <div className="menu-bars">
          <Link to="#">
            <FaBars className="faBar" onClick={showSidebar} />
          </Link>
        </div>
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            <li
              className="navbar-profile"
              title="Profile"
              onClick={handleProfile}
            >
              <FaRegUserCircle className="icon-navbar" />
            </li>
            <li onClick={handleToDo} title="To-Do-List">
              <RiTodoLine className="icon-navbar" />
            </li>
            <li className="navbar-logout" onClick={handleLogout} title="Logout">
              <FiLogOut className="icon-navbar" />
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={sidebar ? 'menu-bg-active' : 'menu-bg'}></div> */}
    </div>
  );
}

export default MenuBar;
