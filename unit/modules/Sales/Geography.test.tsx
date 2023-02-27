import { screen, fireEvent } from "@testing-library/react";
import { customRender } from "../../test-utils";
import Geography from "../../../modules/Sales/Geography/Geography";

describe("Geography", () => {
  it("renders a geography panel", () => {
    const setShowResult = jest.fn();
    customRender(
      <Geography showResult={false} setShowResult={setShowResult} />
    );
    expect(screen.getByText("Where are you looking for companies at?"));
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    const companyLocation = screen.getByText(
      "Where are you looking for companies at?"
    ).nextSibling;
    fireEvent.change(companyLocation as Node, { target: { value: "Warsaw" } });
    fireEvent.click(buttons[1]);
  });
});
