import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { useForm, validate } from "../../utils";
import { Submit } from "../atoms";

const Login = ({ submitForm }) => {
  const { handleSubmit, handleChange, errors, values } = useForm(
    submitForm,
    validate
  );
  return (
    <section className="form">
      <div className="auth__container">
        <h1>Login</h1>
        <div className="login">
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

          <div className="login__div login__div--center">
            <span className="">or login with</span>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Your email address"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email ? (
              <div className="error__message">{errors.email}</div>
            ) : null}

            <input
              name="password"
              className="input"
              type="password"
              placeholder="Your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password ? (
              <div className="error__message">{errors.password}</div>
            ) : null}

            <div className="login__div">
              <Submit title="Login" />
            </div>
          </form>
        </div>
        <div className="switch__page">
          <span>
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
