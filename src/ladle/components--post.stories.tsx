import "bootstrap/dist/css/bootstrap.min.css";
import type { Story } from "@ladle/react";
import { Item, Medium, Prefix } from "@/types/RSSTypes";
import Post from "@/components/Post/Post";

export const PostStory: Story<{ data: Item, setShow: React.Dispatch<React.SetStateAction<boolean>>, setData: React.Dispatch<React.SetStateAction<Item>> }> = ({
    data, setShow, setData
}) => {
    return <Post data={data} setShow={setShow} setData={setData} />
}

PostStory.args = {
    data: {
        title: "The Many Roles &amp; Responsibilities Of Startup CTOs: A Deep Dive",
        link: "https://www.itmagination.com/blog/many-roles-responsibilities-startup-cto-deep-dive",
        guid: "https://www.itmagination.com/blog/many-roles-responsibilities-startup-cto-deep-dive",
        description: "The role of a CTO in a startup company is multi-faceted and involves several key tasks and responsibilities such as hiring engineers, developing a company-wide security policy, creating a product roadmap and user experience, and managing product development and application architecture. They play a crucial role in the success of a startup and must be able to navigate the complex world of security protocols and procedures, attract top talent, and ensure the company&#39;s values align with the team&#39;s values.",
        pubDate: "Wed, 25 Jan 2023 00:00:00 GMT",
        content: {
            _url: "https://uploads-ssl.webflow.com/601be0f0f62d8b2e2a92b830/63d165d02aed92426dfc0321_The%20Many%20Roles%20Of%20A%20Startup%20CTO.png",
            _medium: Medium.Image,
            __prefix: Prefix.Media
        },
        thumbnail: {  
            _url: "https://uploads-ssl.webflow.com/601be0f0f62d8b2e2a92b830/63d165d02aed92426dfc0321_The%20Many%20Roles%20Of%20A%20Startup%20CTO.png",
            __prefix: Prefix.Media
        }
    },
};