import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <ul>
      <li>
        <Link to="/">Welcome</Link>
      </li>
      <li>
        <Link to="/chats">Chats</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
      <li>
        <Link to="/chat?name=alex">singlechat</Link>
      </li>
    </ul>
  );
}
