import { render, screen } from "@testing-library/react"
import OwnPost from "../../../modules/Sales/OwnPost/OwnPost"

describe("OwnPost", () => {
    it("render an ownpost module", () => {
        render(<OwnPost />)
        expect(screen.getByText("What are you writing about?")).toBeInTheDocument()
    })
})