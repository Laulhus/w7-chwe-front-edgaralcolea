import { combineReducers } from "redux";
import registeredUsersReducer from "./registeredUsersReducer";

const rootReducer = combineReducers({
  registeredUsers: registeredUsersReducer,
});

export default rootReducer;
