import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  titleText: {
    paddingLeft: theme.spacing(2)
  },
  sendForm: {
    position: "sticky",
    margin: theme.spacing(1),
    bottom: 0
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "-webkit-fill-available",
  },
}));

export default function SendMessageBox({ onSendMessage, loading }) {
  const classes = useStyles();
  const [messageValue, setMessageValue] = useState("");

  const handleChangeMessage = (event) => {
    setMessageValue(event.target.value);
  };

  const handleSendMessage = () => {
    onSendMessage(messageValue, Math.round(new Date() / 1000));
    setMessageValue("");
  }

  return (
    <FormControl
      fullWidth
      className={clsx(classes.sendForm, classes.textField)}
      variant="filled"
    >
      <InputLabel htmlFor="send-message-box">Your Message</InputLabel>
      <FilledInput
        id="send-message-box"
        type="text"
        value={messageValue}
        onChange={handleChangeMessage}
        endAdornment={
          <InputAdornment>
            <IconButton
              aria-label="send message"
              edge="start"
              onClick={handleSendMessage}
            >
              {!loading ? <SendIcon /> : <HourglassEmptyIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
