import { render, screen } from "@testing-library/react"
import SalesIntro from "../../../modules/Sales/Intro/SalesIntro"

describe("Intro", () => {
    it("renders a intro panel", () => {
        render(<SalesIntro />)
        expect(screen.getByText("Who are you writing to?")).toBeInTheDocument()
    })
})