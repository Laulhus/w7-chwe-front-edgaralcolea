import actionTypes from "../../actions/actionTypes";

const registeredUsersReducer = (currentUsers = [], action = {}) => {
  let newRegisteredUsers;
  switch (action.type) {
    case actionTypes.createUser:
      newRegisteredUsers = [...currentUsers, action.user];
      break;
    default:
      newRegisteredUsers = [...currentUsers];
  }
  return newRegisteredUsers;
};

export default registeredUsersReducer;
