import { render, screen } from '@testing-library/react'
import Post from '../../components/Post/Post'
import Data from "../../mockData/mock_posts.json";
import type { Item } from "../../types/RSSTypes";

describe('Post', () => { 
    it('renders a post', () => {
        const postData: Item = Data.data.posts[1] as never as Item;
        render(<Post data={postData} /> )
        const buttons = screen.getAllByRole("button");
        expect(buttons[0]).toHaveTextContent("Edit");
        expect(buttons[1]).toHaveTextContent("Primary");
    })
})