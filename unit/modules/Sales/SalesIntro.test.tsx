import { screen, fireEvent } from "@testing-library/react";
import { customRender } from "../../test-utils";
import SalesIntro from "../../../modules/Sales/Intro/SalesIntro";

describe("Intro", () => {
  it("renders a intro panel", () => {
    const setShowResult = jest.fn();
    customRender(
      <SalesIntro showResult={false} setShowResult={setShowResult} />
    );
    expect(screen.getByText("Who are you writing to?")).toBeInTheDocument();
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    const author = screen.getByText("Who are you writing to?").nextSibling;
    fireEvent.change(author as Node, { target: { value: "John Doe" } });
    const position = screen.getByText("What's their position?").nextSibling;
    fireEvent.change(position as Node, { target: { value: "CTO" } });
    const purpose = screen.getByText("What do we want?").nextSibling;
    fireEvent.change(purpose as Node, { target: { value: "simple purpose" } });
    fireEvent.click(buttons[1]);
  });
});
