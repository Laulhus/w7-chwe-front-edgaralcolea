import actionTypes from "./actionTypes";

const createUserAction = (user) => ({
  type: actionTypes.createUser,
  user,
});

export default createUserAction;
