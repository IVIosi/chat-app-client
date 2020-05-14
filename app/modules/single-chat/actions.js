import { SEND_MESSAGE } from "./action-types";

export function sendMessage(content, date) {
  return {
    type: SEND_MESSAGE,
    content,
    date,
  };
}
