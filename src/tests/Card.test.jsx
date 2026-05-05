import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Card from '../components/Card'

describe("Card component", () => {

  it("renders Card", () => {

    const { container } = render(<Card id={{id: 1, n: 1}} page='shop' />);

    expect(container).toMatchSnapshot();

  });

  it("adds to cart", async () => {

    // const user = userEvent.setup();

    render(<Card id={{id: 1, n: 1}} page='shop' />);

    // const button = screen.getByRole("button", { name: "Add to cart" });

    // await user.click(button);

    expect(screen.getByRole("button").textContent).toMatch(/add to cart/i);

  });

});