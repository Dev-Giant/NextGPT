import { render, screen } from "@testing-library/react";
import FormTextArea from "../../components/FormTextArea/FormTextArea";

describe('FormTextArea', () => { 
    it('renders a form-text-area', () => {
        render(<FormTextArea label="Sample Form Label" placeHolder="Sample PlaceHolder" rows={5}/> )
        const label = screen.getByText("Sample Form Label");
        expect(label).toBeInTheDocument();
        const placeholder = screen.queryByPlaceholderText("Sample PlaceHolder");
        expect(placeholder).toBeInTheDocument();
    })
})