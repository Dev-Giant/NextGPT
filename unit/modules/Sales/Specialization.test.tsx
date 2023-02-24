import { screen } from "@testing-library/react";
import { customRender } from "../../test-utils";
import Specialization from "../../../modules/Sales/Specialization/Specialization";

describe("Specialization", () => {
  it("renders a specialization", () => {
    customRender(<Specialization />);
    expect(screen.getByText("What's the name of the company?"));
  });
});
