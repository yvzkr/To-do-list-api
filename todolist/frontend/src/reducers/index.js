import { combineReducers } from "redux";
import todos from "./todos";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import todo_items from "./todoItems";

export default combineReducers({
    todos,
    errors,
    messages,
    auth,
    todo_items
});