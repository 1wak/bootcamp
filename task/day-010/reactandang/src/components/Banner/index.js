import { Button } from "../atoms";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section>
      <div class="card">
        <div class="container">
          <h3 class="display-4">Your Knowledge is Worthy.</h3>
          <p class="lead">
            Get feedback by your favorite company and insight fro work
            opportunity
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Banner;
