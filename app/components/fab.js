import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(5),
    right: theme.spacing(5)
  }
}));

export default function CustomFab({ label, iconName, action }) {
  const classes = useStyles();
  const icons = {
    add: AddIcon,
    create: CreateIcon,
    chat: ChatIcon
  };
  const FabIcon = icons[iconName];

  return (
    <Fab
      color="primary"
      aria-label={label}
      label={label}
      className={classes.fab}
      onClick={action}
    >
      <FabIcon />
    </Fab>
  );
}
