import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  '@global': {
    a: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main className={classes.root}>
        <Router>
          <Routes />
        </Router>
      </main>
    </>
  );
}
