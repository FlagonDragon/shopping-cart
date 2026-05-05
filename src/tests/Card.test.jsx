import { vi, describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from '../components/Card'

describe("Card component", () => {

  it("renders Card", () => {

    const { container } = render(<Card id={{id: 1, n: 1}} page='shop' />);

    expect(container).toMatchSnapshot();

  });

  it("test button", async () => {

    const onClick = vi.fn();

    const user = userEvent.setup();

    render(<Card item={{id: 1, n: 1}} handleClick={onClick} page='shop' />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

    await user.click(button);

    expect(onClick).toHaveBeenCalled();

  });

});