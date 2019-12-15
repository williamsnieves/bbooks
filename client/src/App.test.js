import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Is available the main container into the dom", () => {
  const { getByTestId } = render(<App />);
  const mainContainer = getByTestId("main-container");
  expect(mainContainer).toBeInTheDocument();
});
