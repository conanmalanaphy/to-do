import DisplayItem from "./index";
import { render, screen } from "@testing-library/react";

describe("DisplayItem", () => {
  it("should display name on screen", () => {
    render(
      <DisplayItem
        name={"Test"}
        position={1}
        onDelete={() => {}}
        handleEdit={() => {}}
        onMoveUp={() => {}}
        onMoveDown={() => {}}
        isDownDisabled={false}
        isChecked={false}
        onCheck={() => {}}
      />
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  
  it("should see the postion of element", () => {
    render(
      <DisplayItem
        name={"Test"}
        position={1}
        onDelete={() => {}}
        handleEdit={() => {}}
        onMoveUp={() => {}}
        onMoveDown={() => {}}
        isDownDisabled={false}
        isChecked={false}
        onCheck={() => {}}
      />
    );

    expect(screen.getByText("1)")).toBeInTheDocument();
  });
});
