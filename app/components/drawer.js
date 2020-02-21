import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Divider,
  Avatar
} from "@material-ui/core";
import { Link } from "react-router-dom";
import PeopleIcon from "@material-ui/icons/People";
import InfoIcon from "@material-ui/icons/Info";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  avatar: {
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(5)
  },
  avatarText: {
    paddingLeft: theme.spacing(2)
  }
}));

export default function CustomDrawer({ toggleDrawer, isOpen }) {
  const classes = useStyles();

  return (
    <Drawer
      ModalProps={{
        onBackdropClick: toggleDrawer,
        onEscapeKeyDown: toggleDrawer
      }}
      open={isOpen}
    >
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          <ListItem button className={classes.avatar} key="contacts">
            <Avatar />
            <ListItemText className={classes.avatarText} primary="Mostafa Sameti" />
          </ListItem>
          <Divider />
          <Link to="/chats">
            <ListItem button key="chats">
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chats" />
            </ListItem>
          </Link>
          <Link to="/contacts">
            <ListItem button key="contacts">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItem>
          </Link>
        </List>
      </div>
    </Drawer>
  );
}
