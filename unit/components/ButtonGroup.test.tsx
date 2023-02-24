import { render, screen } from '@testing-library/react'
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup'

describe('ButtonGroup', () => { 
    it('renders a buttongroup', () => {
        const handleClear = jest.fn();
        const handleGenerate = jest.fn();
        render(<ButtonGroup handleClear={handleClear} handleGenerate={handleGenerate} /> )
        const buttons = screen.getAllByRole("button");
        expect(buttons[0]).toHaveTextContent("Clear");
        expect(buttons[1]).toHaveTextContent("Generate");
    })
})