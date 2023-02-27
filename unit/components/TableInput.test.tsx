import { fireEvent, render, screen } from "@testing-library/react";
import TableInput from "@/components/TableInput/TableInput";

describe("TableInput", () => {
  it("renders a TableInput", () => {
    const tableRow = document.createElement("tr");
    render(<TableInput initialValue="example input" type="text" />, {
      container: document.body.appendChild(tableRow),
    });
    const inputBox = screen.getByLabelText("text");
    expect(inputBox).toBeInTheDocument();
    expect(inputBox).toHaveValue("example input");
  });

  it("check for onChange event", () => {
    const tableRow = document.createElement("tr");
    render(<TableInput initialValue="example input" type="text" />, {
      container: document.body.appendChild(tableRow),
    });
    const inputBox = screen.getByLabelText("text");
    fireEvent.change(inputBox, { target: { value: "new input" } });
    expect(inputBox).toHaveValue("new input");
  });

  it("check for onBlur event", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    const tableRow = document.createElement("tr");
    render(<TableInput initialValue="example input" type="email" />, {
      container: document.body.appendChild(tableRow),
    });
    const inputBox = screen.getByLabelText("email");
    fireEvent.change(inputBox, { target: { value: "new input" } });
    fireEvent.blur(inputBox);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
