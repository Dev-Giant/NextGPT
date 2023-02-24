import { screen } from "@testing-library/react";
import { customRender } from "../../test-utils";
import Fit from "../../../modules/Sales/Fit/Fit";

describe("Fit", () => {
  it("renders a fit panel", () => {
    customRender(<Fit />);
    expect(
      screen.getByText("What's the company description")
    ).toBeInTheDocument();
  });
});
