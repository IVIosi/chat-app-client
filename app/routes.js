import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Welcome from "@app/pages";
import ChatsList from "@app/pages/chats-list";
import ContactsList from "@app/pages/contacts/list";
import UserInfo from "@app/pages/contacts/info";
import SingleChat from "@app/pages/single-chat";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Routes() {
  let query = useQuery();

  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/chats">
        <ChatsList />
      </Route>
      <Route path="/contacts">
        <ContactsList />
      </Route>
      <Route path="/chat">
        <SingleChat name={query.get("name")} />
      </Route>
      <Route path="/info">
        <UserInfo name={query.get("name")} />
      </Route>
    </Switch>
  );
}
