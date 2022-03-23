import React from 'react';
import ToDoApp from '../image/ToDoApp.png';
import Logo from '../image/Logo.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container-home">
      <img className="logo" src={Logo} alt="" />
      <div className="container-home-btn-h1">
        <h1 className="text-primary">#1 Online-To-Do-App</h1>
        <p className="home-p">Focus with the best to do list app</p>
        <Link to="/login">
          <button className="signin-btn">Sign in</button>
        </Link>
        <Link to="/register">
          <button className="signup-btn">Sign up</button>
        </Link>
      </div>
      <img src={ToDoApp} alt="" />
    </div>
  );
}

export default Home;
