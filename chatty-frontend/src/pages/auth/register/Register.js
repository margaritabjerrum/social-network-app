import React from 'react';
import './Register.scss';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';

const Register = () => {
  return (
    <div className="auth-inner">
      {/* <div className="alerts alert-success" role="alert">
        Error message
      </div> */}
      <form className="auth-form">
        <div className="form-input-container">
          <Input
            id="username"
            name="username"
            type="text"
            value="my value"
            labelText="Username"
            placeholder="Enter your Username"
            handleChange={() => {}}
          />
          <Input
            id="email"
            name="email"
            type="text"
            value="tester@test.com"
            labelText="Email"
            placeholder="Enter your Email"
            handleChange={() => {}}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value="my password"
            labelText="Password"
            placeholder="Enter your Password"
            handleChange={() => {}}
          />
        </div>
        <Button label={'REGISTER'} className="auth-button button" disabled={true} />
      </form>
    </div>
  );
};

export default Register;
