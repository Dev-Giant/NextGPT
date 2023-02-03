import { screen } from "@testing-library/react";
import { customRender } from "../test-utils";
import PostList from "../../modules/PostList/PostList";

describe("PostList", () => {
  it("renders a postlist", () => {
    customRender(<PostList />);
    expect(screen.getByText("Blog Post List General")).toBeInTheDocument();
  });
});
