import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import backgroundImage from '../../../assets/images/background.jpg';
import { Link } from 'react-router-dom';
import './ForgotPassword.scss';

const ForgotPassword = () => {
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                {/* <div className="alerts alert-success" role="alert">
							Error message
						</div> */}
                <form className="auth-form">
                  <div className="form-input-container">
                    <Input
                      id="forgotPassword"
                      name="forgotPassword"
                      type="forgotPassword"
                      value="tester@test.com"
                      labelText="Email"
                      placeholder="Enter your Email"
                      handleChange={() => {}}
                    />
                  </div>
                  <Button label={'FORGOT PASSWORD'} className="auth-button button" disabled={true} />
                  <Link to={'/'}>
                    <span className="forgot-password">
                      <FaArrowLeft className="arrow-left" /> Back to Login
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
