import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'

import Routes from "./routes";
import store from './store';

import { CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

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
    <Provider store={store}>
      <CssBaseline />
      <main className={classes.root}>
        <Router>
          <Routes />
        </Router>
      </main>
    </Provider>
  );
}
