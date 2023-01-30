import { render, screen } from '@testing-library/react'
import Post from '../../components/Post/Post'

describe('Post', () => { 
    it('renders a post', () => {
        render(<Post /> )
        const buttons = screen.getAllByRole("button");
        expect(buttons[0]).toHaveTextContent("Edit");
        expect(buttons[1]).toHaveTextContent("Primary");
    })
})