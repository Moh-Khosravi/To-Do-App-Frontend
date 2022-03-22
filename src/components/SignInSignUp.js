import React from 'react';
import { Link } from 'react-router-dom';
import './SignInSignUp.css';
function SignInSignUp() {
  return (
    <div className="container-sign-in-sign-up">
      <Link className="link-lr" to="/login">
        Sign in
      </Link>
      <Link className="link-lr" to="/register">
        Sign up
      </Link>
    </div>
  );
}

export default SignInSignUp;
