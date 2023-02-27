import { screen, fireEvent } from "@testing-library/react";
import { customRender } from "../../test-utils";
import OwnPost from "../../../modules/Sales/OwnPost/OwnPost";

describe("OwnPost", () => {
  it("render an ownpost module", () => {
    const setShowResult = jest.fn();
    customRender(<OwnPost showResult={false} setShowResult={setShowResult} />);
    expect(screen.getByText("What are you writing about?")).toBeInTheDocument();
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    const details = screen.getByText("What are you writing about?").nextSibling;
    fireEvent.change(details as Node, { target: { value: "example details" } });
    fireEvent.click(buttons[1]);
  });
});
