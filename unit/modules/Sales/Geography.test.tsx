import { screen } from "@testing-library/react";
import { customRender } from "../../test-utils";
import Geography from "../../../modules/Sales/Geography/Geography";

describe("Geography", () => {
  it("renders a geography panel", () => {
    customRender(<Geography />);
    expect(screen.getByText("Where are you looking for companies at?"));
  });
});
