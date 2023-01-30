import { render, screen } from "@testing-library/react"
import TextSummary from "../../../modules/General/TextSummary/TextSummary"

describe("Text Summary", () => {
    it("renders a text summary", () => {
        render(<TextSummary />)
        expect(screen.getByText("Original text")).toBeInTheDocument();
    })
})