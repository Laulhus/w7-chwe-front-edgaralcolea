import { combineReducers } from "redux";
import loggedUserReducer from "./loggedUserReducer";
import registeredUsersReducer from "./registeredUsersReducer";

const rootReducer = combineReducers({
  registeredUsers: registeredUsersReducer,
  loggedUser: loggedUserReducer,
});

export default rootReducer;
