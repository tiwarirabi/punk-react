import React from "react";
import { render, screen } from "@testing-library/react";
import NoBeers from "./NoBeers";

test("renders NoBeers", () => {
  render(<NoBeers />);
  const Text1 = screen.getByText(/Nothing to see yet/i);
  const Text2 = screen.getByText(/to add your first beer!/i);
  const Text3 = screen.getByText(/Click here/i);

  expect(Text1).toBeInTheDocument();
  expect(Text2).toBeInTheDocument();
  expect(Text3).toBeInTheDocument();
});
