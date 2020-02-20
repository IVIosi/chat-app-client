import React, { useState } from "react";
import MainAnatomy from "@app/components/main-anatomy";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, Avatar, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import SendMessageBox from "@app/components/send-message-box";
import ChatMessages from "@app/components/chat-view";

const useStyles = makeStyles(theme => ({
  titleText: {
    paddingLeft: theme.spacing(2)
  },
  chatBox: {
    position: "relative",
    minHeight: "calc(100vh - 100px)"
  }
}));

export default function SingleChat() {
  const classes = useStyles();
  const [messageSending, setMessageSending] = useState(false);
  const [chatData, setChatDate] = useState({
    id: "1",
    name: "John Doe",
    phone: "09123334455",
    userName: "john_doe",
    messages: [
      {
        sender: "self",
        content:
          "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like",
        date: "1582113303"
      },
      {
        sender: "else",
        content: "Hi!",
        date: "1582213303"
      }
    ]
  });

  const handleSendMessage = (content, date) => {
    setMessageSending(true);
    setTimeout(() => {
      setChatDate({
        ...chatData,
        messages: [
          ...chatData.messages,
          {
            sender: "self",
            content,
            date
          }
        ]
      });
      setMessageSending(false);
    }, 2000);
  };

  return (
    <MainAnatomy
      hasBackIcon
      title={
        <Link to={`/info?name=${chatData.userName}`}>
          <ListItem button key="contacts">
            <Avatar />
            <ListItemText
              className={classes.titleText}
              primary={chatData.name}
            />
          </ListItem>
        </Link>
      }
    >
      <div className={classes.chatBox}>
        <ChatMessages messages={chatData.messages} />
        <SendMessageBox
          loading={messageSending}
          onSendMessage={handleSendMessage}
        />
      </div>
    </MainAnatomy>
  );
}
