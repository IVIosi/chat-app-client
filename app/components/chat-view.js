import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  List,
  Card,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import clsx from "clsx";
import { formatDate } from "@app/helpers";

const useStyles = makeStyles(theme => ({
  messageContainer: {
    position: "relative",
    minHeight: "calc(100vh - 175px)",
    paddingTop: theme.spacing(2)
  },
  messagePaper: {
    display: "flex",
    marginBottom: theme.spacing(2)
  },
  messageContent: {
    width: "60%"
  },
  messageAvatar: {
    margin: theme.spacing(2)
  },
  userMessage: {
    flexDirection: "row-reverse"
  }
}));

export default function ChatMessages({ messages }) {
  const classes = useStyles();

  return (
    <Container className={classes.messageContainer}>
      {messages.map(message => (
        <div
          key={message.date}
          className={clsx(
            classes.messagePaper,
            message.sender === "self" && classes.userMessage
          )}
        >
          <Avatar className={classes.messageAvatar} />
          <Card variant="outlined" className={classes.messageContent}>
            <ListItem divider>
              <ListItemText primary={message.content} />
            </ListItem>
            <ListItem divider>
              <ListItemText secondary={formatDate(message.date)} />
            </ListItem>
          </Card>
        </div>
      ))}
    </Container>
  );
}
