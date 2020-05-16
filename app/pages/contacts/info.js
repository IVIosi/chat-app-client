import React from "react";
import { connect } from "react-redux";
import MainAnatomy from "@app/components/main-anatomy";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const UserInfo = ({ contactData }) => {
  const history = useHistory();

  return (
    <MainAnatomy
      hasBackIcon
      title={contactData.name}
      fab={{
        iconName: "chat",
        label: "Chat",
        action: () => history.push(`/chat?name=${contactData.userName}`),
      }}
    >
      <Card>
        <CardHeader
          avatar={<Avatar />}
          title={contactData.name}
          subheader={`@${contactData.userName}`}
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
};

const mapStateToProps = (state, ownProps) => {
  return {
    contactData: state.contacts.find((item) => item.userName === ownProps.name),
  };
};

const connectedUserInfo = connect(mapStateToProps)(UserInfo);

export default connectedUserInfo;
