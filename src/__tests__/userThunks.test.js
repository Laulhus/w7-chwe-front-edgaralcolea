// import createUserThunk from "../redux/thunks/userThunks";

// describe("Given a createUserThunk inner function", () => {
//   describe("When it receives a dispatch function", () => {
//     test("Then it should invoke dispatch with a create action and a new user", async () => {
//       const user = {
//         name: "Testman",
//         lastName: "McTest",
//         userName: "Testoman",
//         password: "hola",
//         age: 30,
//         city: "Testingvania",
//       };
//       const dispatch = jest.fn();

//       const thunkFunction = createUserThunk(user);

//       await thunkFunction(dispatch);

//       expect(dispatch).toHaveBeenCalled();
//     });
//   });
// });
