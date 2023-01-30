import { render, screen } from "@testing-library/react";
import FormInput from "../../components/FormInput/FormInput";

describe('FormInput', () => { 
    it('renders a forminput', () => {
        render(<FormInput label="Sample Form Label"/> )
        const label = screen.getByText("Sample Form Label");
        expect(label).toBeInTheDocument();
    })
})