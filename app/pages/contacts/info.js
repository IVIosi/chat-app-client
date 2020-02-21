import React from "react";
import MainAnatomy from "@app/components/main-anatomy";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function UserInfo({ name }) {
  const history = useHistory();

  const userInfo = {
    id: "1",
    name: "John Doe",
    phone: "09123334455",
    userName: "john_doe"
  };

  return (
    <MainAnatomy
      hasBackIcon
      title={userInfo.name}
      fab={{
        iconName: "chat",
        label: "Chat",
        action: () => history.push(`/chat?name=${userInfo.userName}`)
      }}
    >
      <Card>
        <CardHeader
          avatar={<Avatar />}
          title={userInfo.name}
          subheader={`@${userInfo.userName}`}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </MainAnatomy>
  );
}
