import React from 'react';
import './FormLogin.css';
import { useNavigate } from 'react-router-dom';
import SignInSignUp from './SignInSignUp';
import { useAppData } from '../context/DataStorage.js';

function FormLogin() {
  const navigate = useNavigate();
  const { setUserId, setList, setUserName } = useAppData();

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
      sessionStorage.token = data.token;
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
      <SignInSignUp />
      <div className="form-container">
        <form onSubmit={submit} className="form-signin">
          <h1 className="mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating mb-2">
            <input
              name="email"
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput" className="label-login">
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
            <label for="floatingPassword" className="label-login">
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
