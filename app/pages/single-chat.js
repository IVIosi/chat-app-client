import React, { useState } from "react";
import { connect } from "react-redux";
import MainAnatomy from "@app/components/main-anatomy";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, Avatar, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import SendMessageBox from "@app/components/send-message-box";
import ChatMessages from "@app/components/chat-view";
import { sendMessage } from "@app/modules/single-chat/actions";

const useStyles = makeStyles((theme) => ({
  titleText: {
    paddingLeft: theme.spacing(2),
  },
  chatBox: {
    position: "relative",
    minHeight: "calc(100vh - 100px)",
  },
}));

const SingleChat = ({ chatData, dispatch }) => {
  const classes = useStyles();
  const [messageSending, setMessageSending] = useState(false);

  const handleSendMessage = (content, date) => {
    setMessageSending(true);
    setTimeout(() => {
      dispatch(sendMessage(content, date));
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
};

const mapStateToProps = (state) => {
  return {
    chatData: state.singleChat,
  };
};

const connectedSingleChat = connect(mapStateToProps)(SingleChat);

export default connectedSingleChat;
