import { useState } from "react";
import { Link } from "react-router-dom";
import FormContainer from "./RegisterFormComponent/FormContainer.style";

const LoginFormComponent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    resetForm();
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
    name: "",
    lastName: "",
    age: null,
    city: "",
    profile: null,
  };

  const resetForm = () => {
    setFormData(blankForm);
  };

  const [formData, setFormData] = useState(blankForm);

  const isFilled =
    formData.userName !== "" &&
    formData.password !== "" &&
    formData.name !== "" &&
    formData.lastName !== "" &&
    formData.age !== null &&
    formData.city !== "";

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
