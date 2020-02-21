import React from "react";
import MainAnatomy from "@app/components/main-anatomy";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ContactsList() {
  const contacts = [
    {
      id: "1",
      name: "John Doe",
      phone: "09123334455",
      userName: "john_doe"
    },
    {
      id: "2",
      name: "Jack Doe",
      phone: "09123334455",
      userName: "jack_doe"
    },
    {
      id: "3",
      name: "Joseph Doe",
      phone: "09123334455",
      userName: "joseph_doe"
    }
  ];

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
