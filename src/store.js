import { createStore } from "redux";
import likedSongsReducer from "./likedSongsReducer";

const store = createStore(
  likedSongsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
