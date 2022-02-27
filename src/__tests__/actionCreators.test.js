import createUserAction from "../redux/actions/actionCreators";
import actionTypes from "../redux/actions/actionTypes";

describe("Given a createUserAction function", () => {
  describe("When called with an user", () => {
    test('Then it should return an action object with type: "create-user" and the user', () => {
      const user = {
        name: "Testman",
        lastName: "McTest",
        userName: "Testoman",
        password: "hola",
        age: 30,
        city: "Testingvania",
      };
      const expectedAction = {
        type: actionTypes.createUser,
        user,
      };
      const action = createUserAction(user);

      expect(action).toEqual(expectedAction);
    });
  });
});
