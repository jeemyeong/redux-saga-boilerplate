import { combineReducers } from "redux";
import { todoForm, todos } from "../todo/todoReducer.js";

const rootReducer = combineReducers({
  todos,
  todoForm,
});

export default rootReducer;