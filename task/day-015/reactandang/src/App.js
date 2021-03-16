import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { Footer, Header, Layout } from "./components";
import { FourOhFour, Home, Login, Register, BlogPage, JobPage } from "./pages";
import { makeStyles } from "@material-ui/core/styles";
import InternPage from "./pages/Intern";

const useStyles = makeStyles({
  container: {
    marginTop: 85,
    marginBottom: 80,
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Layout>
        <Header />
        <Switch>
          <div className={classes.container}>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/jobs" component={JobPage} />
            <Route exact path="/intern" component={InternPage} />
          </div>
          <Route path="*" component={FourOhFour} />
        </Switch>
        <Footer />
      </Layout>
    </Fragment>
  );
};

export default App;
