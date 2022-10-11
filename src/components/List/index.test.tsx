import { render, screen } from "@testing-library/react";
import List from ".";

describe("List", () => {
  it("should display the title on screen", () => {
    render(<List />);

    expect(
      screen.getByText("To start your list add some items...")
    ).toBeInTheDocument();
  });
});
