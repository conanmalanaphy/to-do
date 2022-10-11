import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("should display the title on screen", () => {
    render(
      <Header
        text=""
        addToList={() => {}}
        updateText={() => {}}
        hasNoItems={false}
        clearList={() => {}}
      />
    );

    expect(screen.getByText("To-Do")).toBeInTheDocument();
  });

  it("button should be disabled", () => {
    render(
      <Header
        text=""
        addToList={() => {}}
        updateText={() => {}}
        hasNoItems={false}
        clearList={() => {}}
      />
    );

    expect(screen.getByRole("button", { name: /add/i })).toBeDisabled();
  });

  it("button should be enabled if text", () => {
    render(
      <Header
        text="test"
        addToList={() => {}}
        updateText={() => {}}
        hasNoItems={false}
        clearList={() => {}}
      />
    );

    expect(screen.getByRole("button", { name: /add/i })).not.toBeDisabled();
  });
});
