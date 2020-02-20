import React, { Fragment } from "react";
import MainAnatomy from "@app/components/main-anatomy";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Divider
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  titleText: {
    paddingLeft: theme.spacing(2)
  },
  content: {
    minHeight: "100%"
  }
}));

export default function ChatsList() {
  const history = useHistory();
  const classes = useStyles();

  const latestChats = [
    {
      id: "1",
      name: "John Doe",
      userName: "john_doe",
      chatPreview: {
        content: "Do you have Paris recommendations? Have you ever…",
        date: "10:30"
      }
    },
    {
      id: "2",
      name: "Jack Doe",
      userName: "jack_doe",
      chatPreview: {
        content: "Do you have Paris recommendations? Have you ever…",
        date: "10:30"
      }
    },
    {
      id: "3",
      name: "Joseph Doe",
      userName: "joseph_doe",
      chatPreview: {
        content: "Do you have Paris recommendations? Have you ever…",
        date: "10:30"
      }
    }
  ];

  return (
    <MainAnatomy
      hasBackIcon
      title="Chats"
      fab={{
        iconName: "create",
        label: "Create",
        action: () => history.push("/contacts")
      }}
    >
      <List>
        {latestChats.map(chat => (
          <Fragment key={chat.id}>
          <Link to={`/chat?=${chat.userName}`}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={chat.name} />
              </ListItemAvatar>
              <ListItemText
                primary={chat.name}
                secondary={chat.chatPreview.content}
              />
              <ListItemSecondaryAction>
                {chat.chatPreview.date}
              </ListItemSecondaryAction>
            </ListItem>
            </Link>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
    </MainAnatomy>
  );
}
