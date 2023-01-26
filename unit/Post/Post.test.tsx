import { render, screen } from '@testing-library/react'
import Post from '../../components/Post/Post'

describe('Post', () => { 
    it('renders a post', () => {
        render(<Post /> )

        const postByTestId = screen.getByTestId('post')

        expect(postByTestId).toBeInTheDocument()
    })
 })