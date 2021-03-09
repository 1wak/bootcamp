import React from "react";
import { Link } from "react-router-dom";
import { Input, Submit } from "../../components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default class Login extends React.Component {
  state = {
    user: "",
    rememberMe: false,
  };

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("user", rememberMe ? user : "");
  };
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

            <form className="login__form">
              <Input
                className="input"
                type="email"
                placeholder="Your email address"
                required
              />
              <Input
                className="input"
                type="password"
                placeholder="Your password"
                required
              />
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
  }
}
