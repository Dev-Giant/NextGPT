import { fireEvent, screen } from "@testing-library/react";
import { customRender } from "../test-utils";
import PostList from "../../modules/PostList/PostList";
import Data from "../../mockData/mock_posts.json";

describe("PostList", () => {
  it("renders a postlist", () => {
    customRender(<PostList />);
    expect(screen.getByText("Blog Post List General")).toBeInTheDocument();
  });

  it("check for pagination functionality", () => {
    jest.mock("../../src/redux/slices/sales", () => {
      return {
        getPosts: jest.fn(() =>
          Promise.resolve({
            posts: Data.data.posts,
            total: Data.data.posts.length,
            page: 1,
          })
        ),
      };
    });
    customRender(<PostList />);
    const paginationComponent = screen.getByTestId("pagination");
    expect(paginationComponent).toBeInTheDocument();
    const pages = paginationComponent.getElementsByClassName("page-item");
    fireEvent.click(pages[pages.length - 1]);
    fireEvent.click(pages[0]);
  });
});
