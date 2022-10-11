import EditItem from "./index";
import { render, screen } from "@testing-library/react";

describe("EditItem", () => {
  it("should see the position of the element", () => {
    render(
      <EditItem
        name="Test"
        position={1}
        cancelEdit={() => {}}
        updateItem={() => {}}
      />
    );

    expect(screen.getByText("1)")).toBeInTheDocument();
  });
});
