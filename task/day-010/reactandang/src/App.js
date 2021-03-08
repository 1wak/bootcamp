import { Route, Switch } from "react-router";
import { Footer, Header, Layout } from "./components";
import { FourOhFour, Home } from "./pages";

function App() {
  return (
    <Layout>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={FourOhFour} />
      </Switch>
      <Footer />
    </Layout>
  );
}

export default App;
