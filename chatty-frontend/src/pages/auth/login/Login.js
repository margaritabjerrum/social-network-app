import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';
import './Login.scss';
import { authService } from '../../../services/api/auth/auth.service';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [keepLoggedIn, setKeepLoggedIn] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [alertType, setAlertType] = React.useState('');
  const [user, setUser] = React.useState('');

  const loginUser = async (event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const result = await authService.signIn({
        username,
        password
      });
      // 1 - set logged in to true in local storage
      // 2 - set username in local storage
      // 3 - dispatch user to redux
      setUser(result.data.user);
      setAlertType('alert-success');
      setHasError(false);
      setAlertType('alert-success');
      setKeepLoggedIn(keepLoggedIn);
    } catch (error) {
      setLoading(false);
      setHasError(true);
      setAlertType('alert-error');
      setErrorMessage(error?.response?.data.message);
    }
  };

  React.useEffect(() => {
    if (loading && !user) return;
    if (user) {
      console.log('navigate to streams page from login page');
      setLoading(false);
    }
  }, [loading, user]);

  return (
    <div className="auth-inner">
      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role="alert">
          {errorMessage}
        </div>
      )}
      <form className="auth-form" onSubmit={loginUser}>
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            value={username}
            labelText="Username"
            placeholder="Enter your Username"
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={(event) => setUsername(event.target.value)}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            labelText="Password"
            placeholder="Enter your Password"
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={(event) => setPassword(event.target.value)}
          />
          <label className="checkmark-container" htmlFor="checkbox">
            <Input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              value={keepLoggedIn}
              handleChange={() => setKeepLoggedIn(!keepLoggedIn)}
            />
            Keep me signed in
          </label>
        </div>
        <Button
          label={`${loading ? 'LOGIN IN PROGRESS...' : 'LOGIN'}`}
          className="auth-button button"
          disabled={!username || !password}
        />
        <Link to={'/forgot-password'}>
          <span className="login">
            Forgot password? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
