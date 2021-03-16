import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    textTransform: "uppercase",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  headerMenu: {
    display: "flex",
    textTransform: "uppercase",
  },
  headerMenuItem: {
    margin: theme.spacing(0, 1),
  },
  menuButton: {
    marginLeft: 10,
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            component="h2"
            noWrap
          >
            <Link to="/">Lakerja</Link>
          </Typography>
          <div className={classes.headerMenu}>
            <Typography className={classes.headerMenuItem}>
              <Link to="/intern">Virtual Internship</Link>
            </Typography>
            <Typography className={classes.headerMenuItem}>
              <Link to="/jobs">Find A Job</Link>
            </Typography>
            <Typography className={classes.headerMenuItem}>
              <Link to="/blog">Interview Tips</Link>
            </Typography>
          </div>
          <Button
            className={classes.menuButton}
            variant="outlined"
            color="primary"
            onClick={() => history.push("/login")}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
