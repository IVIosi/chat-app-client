import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import CustomDrawer from "./drawer";

import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(theme => ({
  appBar: {
    minHeight: theme.spacing(7)
  },
  menuButton: {
    marginRight: theme.spacing(5)
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(10)
  }
}));

export default function Header({ hasBackIcon, title }) {
  const classes = useStyles();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar variant="regular">
          <IconButton
            color="inherit"
            className={classes.menuButoon}
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {hasBackIcon && (
            <IconButton
              onClick={() => history.goBack()}
              color="inherit"
              edge="start"
              aria-label="menu"
            >
              <ArrowBackIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <CustomDrawer
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}

Header.defaultProps = {
  hasBackIcon: false
};
