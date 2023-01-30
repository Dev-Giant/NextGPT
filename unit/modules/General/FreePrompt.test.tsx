import { render, screen } from "@testing-library/react";
import FreePrompt from "../../../modules/General/FreePrompt/FreePrompt";

describe("FreePrompt",() => {
    it("renders a free prompt", () => {
        render(<FreePrompt />);
        const label = screen.getByText("Enter your prompt");
        expect(label).toBeInTheDocument();
    })
})