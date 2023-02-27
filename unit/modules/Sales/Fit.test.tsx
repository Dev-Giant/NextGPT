import { screen, fireEvent } from "@testing-library/react";
import { customRender } from "../../test-utils";
import Fit from "../../../modules/Sales/Fit/Fit";

describe("Fit", () => {
  it("renders a fit panel", () => {
    const setShowResult = jest.fn();
    customRender(<Fit showResult={false} setShowResult={setShowResult} />);
    expect(
      screen.getByText("What's the company description")
    ).toBeInTheDocument();
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    const companyDescription = screen.getByText(
      "What's the company description"
    ).nextSibling;
    fireEvent.change(companyDescription as Node, {
      target: { value: "company" },
    });
    fireEvent.click(buttons[1]);
  });
});
