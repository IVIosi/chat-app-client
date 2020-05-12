import { SEND_MESSAGE } from "./action-types";

const initialState = {
  id: "1",
  name: "John Doe",
  phone: "09123334455",
  userName: "john_doe",
  messages: [
    {
      sender: "self",
      content:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like",
      date: "1582113303",
    },
    {
      sender: "else",
      content: "Hi!",
      date: "1582213303",
    },
  ],
};

const singleChat = (state = initialState, { type, content, date }) => {
  switch (type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            sender: "self",
            content,
            date,
          },
        ],
      };
    default:
      return state;
  }
};

export default singleChat;
