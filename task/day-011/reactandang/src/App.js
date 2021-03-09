import { Route, Switch } from "react-router";
import { Footer, Header, Layout } from "./components";
import { FourOhFour, Home, Login, Register } from "./pages";

function App() {
  return (
    <Layout>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="*" component={FourOhFour} />
      </Switch>
      <Footer />
    </Layout>
  );
}

export default App;
