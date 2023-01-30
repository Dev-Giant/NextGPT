import { render, screen } from "@testing-library/react"
import ResultCopy from "../../modules/ResultCopy/ResultCopy"

describe("ResultCopy", () => {
    it("renders a result copy element", () => {
        render(<ResultCopy />)
        const copyButton = screen.getByRole("button")
        expect(copyButton).toHaveTextContent("Copy to clipboard")
    })
})