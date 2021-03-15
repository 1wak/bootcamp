import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { useForm, validate } from "../../utils";

const Register = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
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
          <form className="signup__form" onSubmit={handleSubmit}>
            <input
              id="email"
              name="email"
              className="input"
              type="email"
              placeholder="Your email address"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email ? (
              <div className="error__message">{errors.email}</div>
            ) : null}
            <input
              id="password"
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
            <input
              id="password2"
              name="password2"
              className="input"
              type="password"
              placeholder="Re enter your password"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 ? (
              <div className="error__message">{errors.password2}</div>
            ) : null}
            <input
              id="name"
              name="name"
              className="input"
              type="text"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name ? (
              <div className="error__message">{errors.name}</div>
            ) : null}
            <input
              id="phone"
              name="phone"
              className="input"
              placeholder="Enter phone number"
              type="text"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone ? (
              <div className="error__message">{errors.phone}</div>
            ) : null}
            <input
              id="address"
              name="address"
              className="input"
              type="text"
              placeholder="Enter home address"
              value={values.address}
              onChange={handleChange}
            />
            {errors.address ? (
              <div className="error__message">{errors.address}</div>
            ) : null}
            <div className="signup__message">
              <span className="">
                By creating an account, you agree to our{" "}
                <Link className="signup__link" to="/">
                  terms & conditions.
                </Link>
              </span>
            </div>
            <button className="button button--submit">Create Account</button>
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
