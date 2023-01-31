import { render, screen } from "@testing-library/react";
import FormInput from "../../components/FormInput/FormInput";

describe('FormInput', () => { 
    it('renders a forminput', () => {
        render(<FormInput label="Sample Form Label" inputType="text" placeHolder="Sample PlaceHolder" /> )
        const label = screen.getByText("Sample Form Label");
        expect(label).toBeInTheDocument();
        const placeHolder = screen.queryByPlaceholderText("Sample PlaceHolder");
        expect(placeHolder).toBeInTheDocument();
    })
})