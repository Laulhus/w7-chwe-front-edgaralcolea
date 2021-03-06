import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUserThunk } from "../../redux/thunks/userThunks";

import FormContainer from "./FormContainer.style";

const RegisterFormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = new FormData();
    userData.append("picture", formData.picture);
    userData.append("userName", formData.userName);
    userData.append("password", formData.password);
    userData.append("name", formData.name);
    userData.append("lastName", formData.lastName);
    userData.append("age", formData.age);
    userData.append("city", formData.city);
    dispatch(createUserThunk(userData));
    resetForm();
    navigate("/login");
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
          <h1 className="title">Create your profile!</h1>
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
        <li>
          <label htmlFor="name" title="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            required
          />
        </li>
        <li>
          <label htmlFor="lastName" title="lastName">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            required
          />
        </li>
        <li>
          <label htmlFor="age" title="age">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
            required
          />
        </li>
        <li>
          <label htmlFor="city" title="city">
            City:
          </label>
          <input type="text" id="city" name="city" onChange={handleChange} />
        </li>
        <li>
          <label htmlFor="picture" title="picture">
            Profile picture:
          </label>
          <input
            type="file"
            id="picture"
            name="picture"
            onChange={handleChange}
          />
        </li>
      </ul>
      <button type="submit" disabled={!isFilled}>
        Register
      </button>
      <p className="link">
        Already have an account?<Link to={"/login"}> Login here</Link>
      </p>
    </FormContainer>
  );
};

export default RegisterFormComponent;
