import { Fragment } from "react";
import { Footer, Header } from "./components";
import { Switch, Route } from "react-router-dom";
import { About, Home } from "./pages";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
