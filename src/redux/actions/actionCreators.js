import actionTypes from "./actionTypes";

export const createUserAction = (user) => ({
  type: actionTypes.createUser,
  user,
});

export const loginUserAction = (userData) => ({
  type: actionTypes.loginUser,
  userData,
});
