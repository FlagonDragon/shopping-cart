import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Shop from "../components/Shop";

let itemsArray = [];

for (let i = 1; i <= 20; i++) {
    itemsArray.push({id: i, n: 1});
}

describe("Shop component", () => {
  it("renders Shop", () => {

    const { container } = render(<Shop items={itemsArray} />);

    expect(container).toMatchSnapshot();

  });

  it("renders 20 items", async () => {

    render(<Shop items={itemsArray} />);

    const buttons = screen.getAllByRole('button');

    console.log(buttons);
    
  });

});