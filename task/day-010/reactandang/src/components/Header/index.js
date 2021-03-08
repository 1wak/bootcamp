import React from "react";
import { Logo } from "../../assets";
import { Button } from "../atoms";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          <img class="logo" src={Logo} alt="Andang Vijay" />
        </a>
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
            <a class="nav-item nav-link ff" href="/">
              Virtual Internship
            </a>
            <a class="nav-item nav-link ff" href="/">
              Jobs
            </a>
            <a class="nav-item nav-link ff" href="/">
              Interview Tips
            </a>
            <Button />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
