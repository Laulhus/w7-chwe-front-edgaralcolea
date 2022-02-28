import { screen } from "@testing-library/react";
import RegisterFormComponent from "../components/RegisterFormComponent/RegisterFormComponent";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../setupTests";
import { BrowserRouter } from "react-router-dom";
describe("Given a RegisterFormComponent", () => {
  describe("When its invoked", () => {
    test("Then it should render the heading 'Create your profile!'", () => {
      renderWithProviders(
        <BrowserRouter>
          <RegisterFormComponent />
        </BrowserRouter>
      );

      const element = screen.getByRole("heading", {
        name: /Create your profile!/i,
      });

      expect(element).toBeInTheDocument();
    });
  });

  describe("When data gets introduced in the value fields", () => {
    test("Then it should set input value'", () => {
      renderWithProviders(
        <BrowserRouter>
          <RegisterFormComponent />
        </BrowserRouter>
      );

      const input = screen.getByRole("textbox", {
        name: /username/i,
      });

      userEvent.type(input, "Testing");

      expect(input.value).toBe("Testing");
    });
  });
});
