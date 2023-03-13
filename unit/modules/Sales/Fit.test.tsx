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
    const urlAddress = screen.getByText("URL address (optional)").nextSibling;
    fireEvent.change(urlAddress as Node, {
      target: { value: "http://localhost:3000" },
    });
    fireEvent.click(buttons[1]);
  });
});
