import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
// import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Store from '../components/Store'

describe("Store component", () => {
  it("shows button text", () => {

    // const { container } = render(<Store />);
    // expect(container).toMatchSnapshot();

    render(<Store />)

    expect(screen.getByRole("button").textContent).toMatch(/shop now/i);

  });

  // it("renders radical rhinos after button click", async () => {
  //   const user = userEvent.setup();

  //   render(<App />);
  //   const button = screen.getByRole("button", { name: "Click Me" });

  //   await user.click(button);

  //   expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  // });
});