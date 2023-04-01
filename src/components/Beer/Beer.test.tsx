import React from "react";
import { render, screen } from "@testing-library/react";

import Beer from "./Beer";

test("renders Beer", () => {
  const beer = {
    id: 123123,
    name: "Test 1",
    image_url: "",
    description: "This is test description",
    tagline: "test tag",
    ingredients: { malt: [], hops: [], yeast: "", water: "" },
  };

  render(<Beer beer={beer} />);

  const nameText = screen.getByText(/Test 1/i);
  const tagText = screen.getByText(/test tag/i);
  const descriptionText = screen.getByText(/This is test description/i);

  expect(nameText).toBeInTheDocument();
  expect(tagText).toBeInTheDocument();
  expect(descriptionText).toBeInTheDocument();
});
