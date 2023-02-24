import { screen } from "@testing-library/react";
import { customRender } from "../../test-utils";
import OwnPost from "../../../modules/Sales/OwnPost/OwnPost";

describe("OwnPost", () => {
  it("render an ownpost module", () => {
    customRender(<OwnPost />);
    expect(screen.getByText("What are you writing about?")).toBeInTheDocument();
  });
});
