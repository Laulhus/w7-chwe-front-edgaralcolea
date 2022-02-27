import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import server from "./mocks/server";
import store from "./redux/store/index";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderWithProviders = (component) => {
  const Providers = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(component, { wrapper: Providers });
};

export default renderWithProviders;
