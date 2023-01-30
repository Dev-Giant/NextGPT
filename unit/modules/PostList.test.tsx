import { render, screen } from "@testing-library/react"
import PostList from "../../modules/PostList/PostList"

describe("PostList", () => {
    it("renders a postlist", () => {
        render(<PostList />)
        expect(screen.getByText("Blog Post List General")).toBeInTheDocument()
    })
})
