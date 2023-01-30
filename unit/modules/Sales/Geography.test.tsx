import { render, screen } from "@testing-library/react"
import Geography from "../../../modules/Sales/Geography/Geography"

describe("Geography", () => {
    it("renders a geography panel", () => {
        render(<Geography />)
        expect(screen.getByText("Where are you looking for companies at?"))
    })
})