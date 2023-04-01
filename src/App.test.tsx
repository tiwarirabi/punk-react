import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  render(<App />);
  const navBarText1 = screen.getByText(/All Beers/i);
  const navBarText2 = screen.getByText(/My Beers/i);

  expect(navBarText1).toBeInTheDocument();
  expect(navBarText2).toBeInTheDocument();
});
