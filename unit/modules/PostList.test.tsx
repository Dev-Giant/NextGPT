import { fireEvent, screen } from "@testing-library/react";
import { customRender } from "../test-utils";
import PostList from "../../modules/PostList/PostList";

describe("PostList", () => {
  it("renders a postlist", () => {
    customRender(<PostList />);
    expect(screen.getByText("Blog Post List General")).toBeInTheDocument();
  });

  it("check for pagination functionality", () => {
    customRender(<PostList />);
    const paginationComponent = screen.getByTestId("pagination");
    expect(paginationComponent).toBeInTheDocument();
    const pages = paginationComponent.getElementsByClassName("page-item");
    fireEvent.click(pages[pages.length - 1]);
    fireEvent.click(pages[0]);
  });

  it("check for post generation functionality", () => {
    customRender(<PostList />);
    const singlePost = screen
      .getByText("Blog Post List General")
      .parentElement?.getElementsByClassName("postItem")[0];
    const generateButton =
      singlePost?.getElementsByClassName("postGenerate")[0];
    fireEvent.click(generateButton as Element);
    expect(screen.getByTestId("generate_modal")).toBeInTheDocument();
  });
});
