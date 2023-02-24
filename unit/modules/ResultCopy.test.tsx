import { screen } from "@testing-library/react";
import { customRender } from "../test-utils";
import ResultCopy from "../../modules/ResultCopy/ResultCopy";

describe("ResultCopy", () => {
  it("renders a result copy element", () => {
    customRender(<ResultCopy showResult={false} />);
    const copyButton = screen.getByRole("button");
    expect(copyButton).toHaveTextContent("Copy to clipboard");
  });
});
