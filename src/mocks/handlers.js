import { rest } from "msw";

const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}users/register`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        name: "Testman",
        lastName: "McTest",
        userName: "Testoman",
        password: "hola",
        age: 30,
        city: "Testingvania",
      })
    )
  ),
];

export default handlers;
