import { render, screen } from "@testing-library/react"
import EditableTable from "@/components/EditableTable/EditableTable"
import Data from "../../mockData/mock_table.json"

describe("EditableTable", () => {
    it("renders a EditableTable", () => {
        render(<EditableTable cols={Data.cols} rows={Data.rows} types={Data.types} />)
        expect(screen.getByText("No")).toBeInTheDocument();
        expect(screen.queryByDisplayValue("Nikolay")).toBeInTheDocument();
    })
})