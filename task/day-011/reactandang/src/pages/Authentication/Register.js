import React, { useState } from "react";
// import { Input } from "../../components";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
// import { useHistory } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";

const Register = () => {
  // const history = useHistory();
  const [value, setValue] = useState();

  const emailInput = "Email is required";
  const passwordInput = "Password is required";
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const nameInput = "Name is required";
  const addressInput = "Address is required";

  const errorValidation = () =>
    Yup.object().shape({
      email: Yup.string()
        .email("Your email address is not valid")
        .required(emailInput),
      password: Yup.string()
        .matches(passwordRegex, {
          message:
            "Your password must be minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character",
        })
        .required(passwordInput),
      name: Yup.string()
        .min(3, "Name must be atleast 3 characters length")
        .max(50, "Name cannot be greater than 50 characters length")
        .required(nameInput),
      address: Yup.string().required(addressInput),
    });

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
          <Formik
            initialValues={{
              email: "",
              password: "",
              name: "",
              address: "",
            }}
            validationSchema={errorValidation}
            onSubmit={(val) => {
              console.log(val);
            }}
          >
            {({ errors, touched }) => (
              <Form className="signup__form">
                <Field
                  id="email"
                  name="email"
                  className="input input--small"
                  type="email"
                  placeholder="Your email address"
                />
                {errors.email && touched.email ? (
                  <div className="error__message">{errors.email}</div>
                ) : null}
                <Field
                  id="pass"
                  name="password"
                  className="input input--small"
                  type="password"
                  placeholder="Your password"
                />
                {errors.password && touched.password ? (
                  <div className="error__message">{errors.password}</div>
                ) : null}
                <Field
                  id="name"
                  name="name"
                  className="input"
                  type="text"
                  placeholder="Enter your name"
                />
                {errors.name && touched.name ? (
                  <div className="error__message">{errors.name}</div>
                ) : null}
                <PhoneInput
                  className="input"
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                />
                <Field
                  id="address"
                  name="address"
                  className="input"
                  type="text"
                  placeholder="Enter home address"
                />
                {errors.address && touched.address ? (
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
                <button className="button button--submit">
                  Create Account
                </button>
              </Form>
            )}
          </Formik>
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
