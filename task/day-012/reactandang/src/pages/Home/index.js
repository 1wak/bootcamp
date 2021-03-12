import { Component, Fragment } from "react";
import { Banner, Blog, Hero, Intern, Job } from "../../components";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Intern />
        <Banner />
        <Blog />
        <Job />
      </Fragment>
    );
  }
}

export default Home;
