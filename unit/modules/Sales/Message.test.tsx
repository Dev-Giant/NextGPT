import { render, screen } from "@testing-library/react"
import Message from "../../../modules/Sales/Message/Message"

describe("Message", () => {
    it("renders a message module", () => {
        render(<Message />)
        expect(screen.getByText("Who are you writing to")).toBeInTheDocument()
    })
})