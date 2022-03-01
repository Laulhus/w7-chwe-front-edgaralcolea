import actionTypes from "../../actions/actionTypes";

const loggedUserReducer = (user = {}, action = {}) => {
  let newUser;
  switch (action.type) {
    case actionTypes.loginUser:
      newUser = [...user, action.user];
      break;
    default:
      newUser = [...user];
  }
  return newUser;
};

export default loggedUserReducer;
