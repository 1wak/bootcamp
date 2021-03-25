import { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Banner, Blog, Hero, Intern, Job } from "../../components";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Lakerja: Homepage</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
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
