import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "@/components/Pagination/Pagination";

describe("Pagination", () => {
  it("Renders a Pagination and check for prev, next and select page functionality", () => {
    const setPage = jest.fn();
    const setIsFetch = jest.fn();
    render(
      <Pagination
        total={3}
        page={1}
        setPage={setPage}
        setIsFetch={setIsFetch}
      />
    );
    expect(setPage.mock.calls.length).toBe(0);
    expect(setIsFetch.mock.calls.length).toBe(0);
    fireEvent.click(screen.getByText("2"));
    expect(setPage.mock.calls.length).toBe(1);
    expect(setIsFetch.mock.calls.length).toBe(1);
    fireEvent.click(screen.getByText("Previous"));
    expect(setPage.mock.calls.length).toBe(2);
    expect(setIsFetch.mock.calls.length).toBe(2);
    fireEvent.click(screen.getByText("Next"));
    expect(setPage.mock.calls.length).toBe(3);
    expect(setIsFetch.mock.calls.length).toBe(3);
  });
});
