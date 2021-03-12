import React from "react";
import { Logo } from "../../assets";
import { Button } from "../atoms";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <Link class="navbar-brand" to="/">
          <img class="logo" src={Logo} alt="Andang Vijay" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <Link class="nav-item nav-link ff" to="/">
              Virtual Internship
            </Link>
            <Link class="nav-item nav-link ff" to="/">
              Jobs
            </Link>
            <Link class="nav-item nav-link ff" to="/">
              Interview Tips
            </Link>
            <Button
              title="Get Started"
              onClick={() => history.push("/login")}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
