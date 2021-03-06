import { useNavigate, Link } from 'react-router-dom';
import '../scss/Register.scss';
import Logo from '../image/Logo.png';

function Register() {
  const navigate = useNavigate();

  async function registerUser(e) {
    e.preventDefault();
    const rawResponse = await fetch(
      process.env.REACT_APP_FETCH_URL_USER + '/register',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      }
    );

    if (rawResponse.status === 201) {
      navigate('/login');
    } else {
      console.error('failed');
    }
  }

  return (
    <div className="flex flex-col h-full mt-0 container-register">
      <Link to="/">
        <img className="logo" src={Logo} alt="" />
      </Link>
      <div className="container-form-register">
        <form onSubmit={registerUser} className="signup-formular">
          <h1 className="mb-3 fw-normal text-dark">Please sign up</h1>
          <div className="form-floating mb-2">
            <input
              name="firstName"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Max"
            />
            <label htmlFor="floatingInput" className="label-register">
              First name
            </label>
          </div>
          <div className="form-floating mb-2">
            <input
              name="lastName"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Mustermann"
            />
            <label htmlFor="floatingInput" className="label-register">
              Last name
            </label>
          </div>
          <div className="form-floating mb-2">
            <input
              name="email"
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput" className="label-register">
              Email address
            </label>
          </div>
          <div className="form-floating mb-2">
            <input
              name="password"
              type="password"
              className="form-control"
              id="floatingInput"
              placeholder="Password"
            />
            <label htmlFor="floatingInput" className="label-register">
              Password
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary signIn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
