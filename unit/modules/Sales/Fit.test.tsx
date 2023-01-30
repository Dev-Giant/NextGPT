import { render, screen } from "@testing-library/react"
import Fit from "../../../modules/Sales/Fit/Fit"

describe("Fit", () => {
    it("renders a fit panel", () => {
        render(<Fit />)
        expect(screen.getByText("What's the company description")).toBeInTheDocument()
    })
})