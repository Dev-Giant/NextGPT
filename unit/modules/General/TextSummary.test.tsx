import { screen } from "@testing-library/react";
import { customRender } from "../../test-utils";
import TextSummary from "../../../modules/General/TextSummary/TextSummary";

describe("Text Summary", () => {
  it("renders a text summary", () => {
    customRender(<TextSummary />);
    expect(screen.getByText("Original text")).toBeInTheDocument();
  });
});
