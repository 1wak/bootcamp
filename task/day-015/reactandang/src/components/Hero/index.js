import { Button } from "../atoms";
import "./Hero.css";

const Hero = () => {
  return (
    <section>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">
            Find New
            <br /> Virtual Work Experience
          </h1>
          <p class="lead">With Lakerja you can get new work experience.</p>
          <Button title="Learn more" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
