import createUserAction, { loginUserAction } from "../actions/actionCreators";
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
    method: "POST",
    body: userData,
  });
  if (response.ok) {
    const token = await response.json();
    const { name, userName, id } = jwtDecode(token);
    localStorage.setItem("token", token);
    dispatch(loginUserAction({ name, userName, id, loggedIn: true }));
  }
};
