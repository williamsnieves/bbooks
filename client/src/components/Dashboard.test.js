import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("Is available the main container into the dom", () => {
  const { getByText } = render(<Dashboard />);
  const mainContainer = getByText("B-Books - Store");
  expect(mainContainer).toBeVisible();
});
