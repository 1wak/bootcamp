import React from "react";
import { Link } from "react-router-dom";
import { Submit } from "../../components";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default class Login extends React.Component {
  emailInput = "Email is required";
  passwordInput = "Password is required";
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  errorValidation = () =>
    Yup.object().shape({
      email: Yup.string()
        .email("Your email address is not valid please kindly check carefull")
        .required(this.emailInput),
      password: Yup.string()
        .matches(this.passwordRegex, {
          message:
            "Your password must be minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
        })
        .required(this.passwordInput),
    });

  render() {
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
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={this.errorValidation}
              onSubmit={async ({ email, password }) => {
                await localStorage.setItem("email", email);
                await localStorage.setItem("password", password);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field
                    name="email"
                    className="input"
                    type="email"
                    placeholder="Your email address"
                  />
                  {errors.email && touched.email && (
                    <div className="error__message">{errors.email}</div>
                  )}

                  <Field
                    name="password"
                    className="input"
                    type="password"
                    placeholder="Your password"
                  />
                  {errors.password && touched.password && (
                    <div className="error__message">{errors.password}</div>
                  )}

                  <div className="login__div">
                    <Submit title="Login" />
                  </div>
                </Form>
              )}
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
  }
}
