import React from "react";
import { Input } from "../../components";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <section className="form">
      <div className="auth__container">
        <h1>Register</h1>
        <div className="signup">
          <div className="social clearfix">
            <a className="social__button social__button--facebook" href="/">
              <span className="fa">
                <FaFacebookF />
              </span>
              Login with Facebook
            </a>
            <a className="social__button social__button--twitter" href="/">
              <span className="fa">
                <FaTwitter />
              </span>
              Login with Twitter
            </a>
          </div>

          <div className="signup__message signup__message--center">
            <span className="">or sign up with</span>
          </div>

          <form className="signup__form">
            <Input
              id="email"
              className="input input--small"
              type="email"
              placeholder="Your email address"
            />
            <Input
              id="pass"
              className="input input--small"
              type="password"
              placeholder="Your password"
            />
            <Input
              id="name"
              className="input"
              type="text"
              placeholder="Enter your name"
            />
            <Input
              id="phone"
              className="input"
              type="number"
              placeholder="Enter phone number"
            />
            <Input
              id="addres"
              className="input"
              type="text"
              placeholder="Enter home address"
            />
            <div className="signup__message">
              <span className="">
                By creating an account, you agree to our
                <Link className="signup__link" to="/">
                  terms & conditions.
                </Link>
              </span>
            </div>
            <button
              className="button button--submit"
              onSubmit={() => history.push("/")}
            >
              Create Account
            </button>
          </form>
        </div>
        <div className="switch__page">
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Register;
