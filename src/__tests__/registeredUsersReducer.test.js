import actionTypes from "../redux/actions/actionTypes";
import registeredUsersReducer from "../redux/store/reducers/registeredUsersReducer";

describe("Given a registeredUsersReducer function", () => {
  describe("When it receives a createUserAction", () => {
    test("Then it should return current users adding the user in the received action", () => {
      const user = {
        name: "Testman",
        lastName: "McTest",
        userName: "Testoman",
        password: "hola",
        age: 30,
        city: "Testingvania",
      };
      const action = {
        type: actionTypes.createUser,
        user,
      };
      const expectedUsers = [user];

      const newUsers = registeredUsersReducer([], action);

      expect(newUsers).toEqual(expectedUsers);
    });
  });

  describe("When it receives an action with unknown type", () => {
    test("Then it should return current users unchanged", () => {
      const users = [
        {
          name: "Testman",
          lastName: "McTest",
          userName: "Testoman",
          password: "hola",
          age: 30,
          city: "Testingvania",
        },
        {
          name: "Testman 2",
          lastName: "McTest",
          userName: "Testoman",
          password: "hola",
          age: 30,
          city: "Testingvania",
        },
      ];
      const action = {
        type: "hello",
      };

      const newUsers = registeredUsersReducer(users, action);

      expect(newUsers).toEqual(users);
    });
  });

  describe("When it receives neither action or current users", () => {
    test("Then it should return current users unchanged", () => {
      const users = [];

      const newUsers = registeredUsersReducer();

      expect(newUsers).toEqual(users);
    });
  });
});
