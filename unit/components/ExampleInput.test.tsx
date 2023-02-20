import { render, screen } from "@testing-library/react";
import ExampleInput from "../../components/ExampleInput/ExampleInput";

describe('ExampleInput', () => { 
    it('renders a exampleinput', () => {
        render(<ExampleInput label="Example" content="abcdef" /> )
        const label = screen.getByText("Example");
        expect(label).toBeInTheDocument();
    })
})