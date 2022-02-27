import createUserAction from "../actions/actionCreators";

const createUserThunk = (user) => async (dispatch) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = await fetch(`${apiUrl}users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/form-data",
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    const newUser = await response.json();
    dispatch(createUserAction(newUser));
  }
};

export default createUserAction;
