import { act, fireEvent, screen } from "@testing-library/react";
import { customRender } from "../test-utils";
import GenerateModal from "../../modules/GenerateModal/GenerateModal";
import { Item, Medium, Prefix } from "../../types/RSSTypes";

const initData: Item = {
  title: "The Many Roles &amp; Responsibilities Of Startup CTOs: A Deep Dive",
  link: "https://www.itmagination.com/blog/many-roles-responsibilities-startup-cto-deep-dive",
  guid: "https://www.itmagination.com/blog/many-roles-responsibilities-startup-cto-deep-dive",
  description:
    "The role of a CTO in a startup company is multi-faceted and involves several key tasks and responsibilities such as hiring engineers, developing a company-wide security policy, creating a product roadmap and user experience, and managing product development and application architecture. They play a crucial role in the success of a startup and must be able to navigate the complex world of security protocols and procedures, attract top talent, and ensure the company&#39;s values align with the team&#39;s values.",
  pubDate: "Wed, 25 Jan 2023 00:00:00 GMT",
  content: {
    _url: "https://uploads-ssl.webflow.com/601be0f0f62d8b2e2a92b830/63d165d02aed92426dfc0321_The%20Many%20Roles%20Of%20A%20Startup%20CTO.png",
    _medium: Medium.Image,
    __prefix: Prefix.Media,
  },
  thumbnail: {
    _url: "https://uploads-ssl.webflow.com/601be0f0f62d8b2e2a92b830/63d165d02aed92426dfc0321_The%20Many%20Roles%20Of%20A%20Startup%20CTO.png",
    __prefix: Prefix.Media,
  },
};

describe("Generate Modal", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  const closeMock = jest.fn();
  it("renders a generate_modal", async () => {
    customRender(
      <GenerateModal data={initData} show={true} handleClose={closeMock} />
    );
    expect(
      screen.getByText("Generated social media post for:")
    ).toBeInTheDocument();
  });

  it("check for response data and copy button", () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });
    jest.spyOn(navigator.clipboard, "writeText");
    customRender(
      <GenerateModal data={initData} show={true} handleClose={closeMock} />
    );
    const copyButton = screen.getAllByRole("button")[0];
    fireEvent.click(copyButton);
  });
});
