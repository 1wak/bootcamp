import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Input } from "../../components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

const apiUrl = "http://localhost:8000";

const formValidationSchema = Yup.object({
  email: Yup.string("Enter your email address")
    .email("Enter a valid email address")
    .required("Email address is required"),
  password: Yup.string("")
    .min(8, "Password atleast 8 characters")
    .required("Enter your f* password, canda password"),
});

const Login = () => {
  const history = useHistory();

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
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={formValidationSchema}
            onSubmit={async ({ email, password }) =>
              axios
                .post(`${apiUrl}/api/login`, { email, password })
                .then((res) => {
                  localStorage.setItem("jwtToken", res.data.token);
                  localStorage.setItem("user", JSON.stringify(res.data.user));

                  history.push("/home");
                })
                .catch((err) => alert(err))
            }
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <Input
                    name="email"
                    className="input"
                    type="text"
                    placeholder="Your email address"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <div className="error__message">{errors.email}</div>
                  )}
                  <Input
                    name="password"
                    className="input"
                    type="password"
                    placeholder="Your password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <div className="error__message">{errors.password}</div>
                  )}

                  <div className="login__div">
                    <button type="submit" className="button button--submit">
                      Login
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>
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
