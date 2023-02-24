import { screen } from "@testing-library/react";
import { customRender } from "../../test-utils";
import Message from "../../../modules/Sales/Message/Message";

describe("Message", () => {
  it("renders a message module", () => {
    customRender(<Message />);
    expect(screen.getByText("Who are you writing to")).toBeInTheDocument();
  });
});
