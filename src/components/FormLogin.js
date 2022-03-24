import React from 'react';
import './FormLogin.css';
import { useNavigate, Link } from 'react-router-dom';
import { useAppData } from '../context/DataStorage.js';
import Logo from '../image/Logo.png';
import Cookies from 'js-cookie';

function FormLogin() {
  const navigate = useNavigate();
  const { setUserId, setList, setUserName, setIsLoged } = useAppData();

  async function submit(e) {
    e.preventDefault();

    const rawResponse = await fetch(
      process.env.REACT_APP_FETCH_URL_USER + '/login',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      }
    );

    if (rawResponse.status === 200) {
      const data = await rawResponse.json();
      //sessionStorage.token = data.token;
      Cookies.set('token', data.token, { expires: 1 }, { sameSite: 'none' });
      Cookies.set('user', data.user.id, { expires: 1 }, { sameSite: 'none' });
      setIsLoged(true);
      setUserId(data.user.id);
      setUserName(data.user.firstName + ' ' + data.user.lastName);
      setList(data.user.todos);
      navigate('/user');
    } else {
      alert('Invalid login credentials');
    }
  }

  return (
    <div className="flex flex-col h-full mt-0 container-login">
      <Link to="/">
        <img className="logo" src={Logo} alt="" />
      </Link>
      <div className="form-container">
        <form onSubmit={submit} className="form-signin">
          <h1 className="mb-3 fw-normal text-dark">Please sign in</h1>
          <div className="form-floating mb-2">
            <input
              name="email"
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput" className="label-login">
              Email address
            </label>
          </div>
          <div className="form-floating mb-2">
            <input
              name="password"
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword" className="label-login">
              Password
            </label>
          </div>

          <button className="w-100 btn btn-lg btn-primary signIn" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
