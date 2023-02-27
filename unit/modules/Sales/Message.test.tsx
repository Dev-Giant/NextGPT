import { screen, fireEvent } from "@testing-library/react";
import { customRender } from "../../test-utils";
import Message from "../../../modules/Sales/Message/Message";

describe("Message", () => {
  it("renders a message module", () => {
    const setShowResult = jest.fn();
    customRender(<Message showResult={false} setShowResult={setShowResult} />);
    expect(screen.getByText("Who are you writing to")).toBeInTheDocument();
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);
    const receiver = screen.getByText("Who are you writing to").nextSibling;
    fireEvent.change(receiver as Node, { target: { value: "John Doe" } });
    const details = screen.getByText("Details").nextSibling;
    fireEvent.change(details as Node, { target: { value: "example message" } });
    fireEvent.click(buttons[1]);
  });
});
