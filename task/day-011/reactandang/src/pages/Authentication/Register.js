import React from "react";
import { Input } from "../../components";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <section className="form">
      <div class="auth__container">
        <h1>Register</h1>
        <div class="signup">
          <div class="social clearfix">
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

          <div class="signup__message signup__message--center">
            <span class="">or sign up with</span>
          </div>

          <form class="signup__form">
            <Input
              class="input input--small"
              type="email"
              placeholder="Your email address"
            />
            <Input
              class="input input--small"
              type="password"
              placeholder="Your password"
            />
            <Input class="input" type="text" placeholder="Enter your name" />
            <Input
              class="input"
              type="number"
              placeholder="Enter phone number"
            />
            <Input class="input" type="text" placeholder="Enter home address" />
            <div class="signup__message">
              <span class="">
                By creating an account, you agree to our{" "}
                <a class="signup__link" href="/">
                  terms & conditions.
                </a>
              </span>
            </div>
            <button
              class="button button--submit"
              onSubmit={() => history.push("/")}
            >
              Create Account
            </button>
            {/* <Submit title="Create Account" onSubmit={() => history.push("/")} /> */}
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
