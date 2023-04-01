import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

test("renders Header", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const navBarText1 = screen.getByText(/All Beers/i);
  const navBarText2 = screen.getByText(/My Beers/i);

  expect(navBarText1).toBeInTheDocument();
  expect(navBarText2).toBeInTheDocument();
});
