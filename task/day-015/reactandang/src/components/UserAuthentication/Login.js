import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Input } from "../../components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { validate } from "../../utils";

const Login = ({ submitForm }) => {
  // const { handleSubmit, handleChange, errors, values } = useForm(
  //   submitForm,
  //   validate
  // );
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    setErrors(validate(values));
    if (Object.keys(errors).length === 0) {
      e.preventDefault();
      console.log(values);
    } else {
      history.push("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

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
            <Input
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

            <Input
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
              <button className="button button--submit">Create Account</button>
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
