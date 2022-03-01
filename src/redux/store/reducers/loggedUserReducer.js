import actionTypes from "../../actions/actionTypes";

const initialUserData = { name: "", username: "", id: null, loggedIn: false };

const loggedUserReducer = (user = initialUserData, action = {}) => {
  let newUser;
  switch (action.type) {
    case actionTypes.loginUser:
      newUser = { ...action.user };
      break;
    default:
      newUser = { ...user };
  }
  return newUser;
};

export default loggedUserReducer;
