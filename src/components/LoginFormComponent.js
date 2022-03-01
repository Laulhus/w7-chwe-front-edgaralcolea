import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUserThunk } from "../redux/thunks/userThunks";
import FormContainer from "./RegisterFormComponent/FormContainer.style";

const LoginFormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUserThunk(formData));
    resetForm();
    navigate("/main");
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const blankForm = {
    userName: "",
    password: "",
  };

  const resetForm = () => {
    setFormData(blankForm);
  };

  const [formData, setFormData] = useState(blankForm);

  const isFilled = formData.userName !== "" && formData.password !== "";

  return (
    <FormContainer
      className="form-container"
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      <ul>
        <li>
          <h1 className="title">Sign in!</h1>
        </li>
        <li>
          <label htmlFor="userName" title="userName">
            Username:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            onChange={handleChange}
            required
          />
        </li>
        <li>
          <label htmlFor="password" title="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
        </li>
      </ul>
      <button type="submit" disabled={!isFilled}>
        Login
      </button>
      <p className="link">
        Don't have an account?<Link to={"/register"}> Register here</Link>
      </p>
    </FormContainer>
  );
};

export default LoginFormComponent;
