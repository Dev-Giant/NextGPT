import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout/Layout";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("Layout", () => {
  it("Layout style check", () => {
    mockRouter.push("/");
    render(
      <Layout>
        <p>Render Posts</p>
      </Layout>
    );
    const GeneralLink = screen.getByText("General").closest("li");
    expect(screen.getByText("General")).toHaveAttribute("href", "/");
    if(GeneralLink) {
      expect(GeneralLink.classList.contains("active")).toBeTruthy();
    }
    const SalesLink = screen.getByText("Sales").closest("li");
    expect(screen.getByText("Sales")).toHaveAttribute("href", "/sales");
    if (SalesLink) {
      expect(SalesLink.classList.contains("active")).toBeFalsy();
    }
  });
});
