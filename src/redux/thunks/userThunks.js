import { createUserAction, loginUserAction } from "../actions/actionCreators";
import jwtDecode from "jwt-decode";

export const createUserThunk = (user) => async (dispatch) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = await fetch(`${apiUrl}users/register`, {
    method: "POST",
    body: user,
  });
  if (response.ok) {
    const newUser = await response.json();
    dispatch(createUserAction(newUser));
  }
};

export const loginUserThunk = (userData) => async (dispatch) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = await fetch(`${apiUrl}users/login`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(userData),
  });
  if (response.ok) {
    debugger;
    const { token } = await response.json();
    const { picture, userName, id } = jwtDecode(token);
    localStorage.setItem("token", token);
    dispatch(loginUserAction({ picture, userName, id, loggedIn: true }));
  }
};
