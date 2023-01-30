import { render, screen } from "@testing-library/react";
import ExampleInput from "../../components/ExampleInput/ExampleInput";

describe('ExampleInput', () => { 
    it('renders a exampleinput', () => {
        render(<ExampleInput /> )
        const label = screen.getByText("Example");
        expect(label).toBeInTheDocument();
    })
})