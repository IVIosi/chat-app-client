import { ADD_CONTACT } from "./action-types";

export function sendMessage(newContact) {
  return {
    type: ADD_CONTACT,
    newContact,
  };
}
