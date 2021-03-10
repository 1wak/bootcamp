import React from "react";
import { Link } from "react-router-dom";
import { Input, Submit } from "../../components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    const { email, password } = this.state;
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    event.preventDefault();
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

            <form className="login__form" onSubmit={this.handleSubmit}>
              <Input
                name="email"
                className="input"
                type="email"
                placeholder="Your email address"
                required
                value={this.state.email}
                onChange={this.handleEmail}
              />
              <Input
                name="password"
                className="input"
                type="password"
                placeholder="Your password"
                required
                value={this.state.password}
                onChange={this.handlePassword}
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
