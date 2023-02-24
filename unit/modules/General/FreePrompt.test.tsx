import { screen } from "@testing-library/react";
import { customRender } from "../../test-utils";
import FreePrompt from "../../../modules/General/FreePrompt/FreePrompt";

describe("FreePrompt", () => {
  it("renders a free prompt", () => {
    customRender(<FreePrompt />);
    const label = screen.getByText("Enter your prompt");
    expect(label).toBeInTheDocument();
  });
});
