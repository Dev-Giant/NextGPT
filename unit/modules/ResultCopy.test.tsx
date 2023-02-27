import { screen, fireEvent } from "@testing-library/react";
import { customRender } from "../test-utils";
import ResultCopy from "../../modules/ResultCopy/ResultCopy";

describe("ResultCopy", () => {
  it("renders a result copy element", () => {
    customRender(<ResultCopy showResult={false} />);
    const copyButton = screen.getByRole("button");
    expect(copyButton).toHaveTextContent("Copy to clipboard");
    customRender(<ResultCopy showResult={true} />);
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });
    jest.spyOn(navigator.clipboard, "writeText");
    fireEvent.click(copyButton);
  });
});
