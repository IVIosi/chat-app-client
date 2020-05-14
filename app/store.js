import { createStore } from "redux";
import chatApp from "./modules/root-reducer";

const store = createStore(
  chatApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
