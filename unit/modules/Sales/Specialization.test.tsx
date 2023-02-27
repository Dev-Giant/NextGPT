import { fireEvent, screen } from "@testing-library/react";
import { customRender } from "../../test-utils";
import Specialization from "../../../modules/Sales/Specialization/Specialization";

describe("Specialization", () => {
  it("renders a specialization", () => {
    const setShowResult = jest.fn();
    customRender(
      <Specialization showResult={false} setShowResult={setShowResult} />
    );
    expect(screen.getByText("What's the name of the company?"));
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    const company = screen.getByText(
      "What's the name of the company?"
    ).nextSibling;
    fireEvent.change(company as Node, { target: { value: "ITMAGINATION" } });
    const urlAddress = screen.getByText("URL address (optional)").nextSibling;
    fireEvent.change(urlAddress as Node, {
      target: { value: "http://localhost:3000" },
    });
    fireEvent.click(buttons[1]);
  });
});
