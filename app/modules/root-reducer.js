import { combineReducers } from "redux";
import singleChat from "./single-chat/reducers";
import contacts from "./contacts/reducers";

export default combineReducers({
  singleChat,
  contacts
});
