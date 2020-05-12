import { ADD_CONTACT } from "./action-types";

const initialState = [
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

const contacts = (state = initialState, { type, newContact }) => {
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        newContact,
      };
    default:
      return state;
  }
};

export default contacts;
