import React from "react";
import { Link } from "react-router-dom";
// import { Input, Submit } from "../../components";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default class Login extends React.Component {
  emailInput = "Kolom tidak boleh kosong";
  passwordInput = "Kolom tidak boleh kosong";
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  errorValidation = () =>
    Yup.object().shape({
      email: Yup.string().email(this.emailInput).required(),
      password: Yup.string()
        .matches(this.passwordRegex, { message: "Minimal 10" })
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
                    required
                  />
                  {errors.email && touched.email && <div>{errors.email}</div>}

                  <Field
                    name="password"
                    className="input"
                    type="password"
                    placeholder="Your password"
                    required
                  />
                  {errors.password && touched.password && (
                    <div>{errors.password}</div>
                  )}

                  <div className="login__div">
                    <button type="submit" title="Login">
                      Submit Bro
                    </button>
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
