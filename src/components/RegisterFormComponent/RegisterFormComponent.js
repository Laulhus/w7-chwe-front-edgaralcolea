const RegisterFormComponent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
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
          <input type="text" id="userName" name="userName" required />
        </li>
        <li>
          <label htmlFor="password" title="password">
            Password:
          </label>
          <input type="text" id="password" name="password" required />
        </li>
        <li>
          <label htmlFor="name" title="name">
            Name:
          </label>
          <input type="text" id="name" name="name" required />
        </li>
        <li>
          <label htmlFor="lastName" title="lastName">
            Last Name:
          </label>
          <input type="text" id="lastName" name="lastName" required />
        </li>
        <li>
          <label htmlFor="age" title="age">
            Age:
          </label>
          <input type="number" id="age" name="age" required />
        </li>
        <li>
          <label htmlFor="city" title="city">
            City:
          </label>
          <input type="text" id="city" name="city" />
        </li>
        <li>
          <label htmlFor="picture" title="picture">
            Profile picture:
          </label>
          <input type="file" id="picture" name="picture" />
        </li>
      </ul>
    </form>
  );
};

export default RegisterFormComponent;
