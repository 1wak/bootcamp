import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { FourOhFour, Homepage, Login, Register } from "./pages";
import { Footer, Header, Layout } from "./components";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Layout>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" component={FourOhFour} />
          </Layout>
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
