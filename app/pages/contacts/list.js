import React from "react";
import { connect } from "react-redux";
import MainAnatomy from "@app/components/main-anatomy";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import { Link } from "react-router-dom";

const ContactsList = ({ contacts }) => {
  return (
    <MainAnatomy
      hasBackIcon
      title="Contacts"
      fab={{ iconName: "add", label: "Add", action: () => console.log("add") }}
    >
      <List>
        {contacts.map(contact => (
          <Link key={contact.id} to={`/info?name=${contact.userName}`}>
            <ListItem divider>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText primary={contact.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </MainAnatomy>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

const connectedContactsList = connect(mapStateToProps)(ContactsList);

export default connectedContactsList;
