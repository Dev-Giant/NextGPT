import { screen } from "@testing-library/react";
import { customRender } from "../../test-utils";
import SalesIntro from "../../../modules/Sales/Intro/SalesIntro";

describe("Intro", () => {
  it("renders a intro panel", () => {
    customRender(<SalesIntro />);
    expect(screen.getByText("Who are you writing to?")).toBeInTheDocument();
  });
});
