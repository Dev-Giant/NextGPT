import "bootstrap/dist/css/bootstrap.min.css";
import type { Story } from "@ladle/react";
import EditableTable from "@/components/EditableTable/EditableTable";

export const EditableTableStory: Story<{
  cols: string[];
  rows: unknown[];
  types: string[];
}> = ({ cols, rows, types }) => {
  return <EditableTable cols={cols} rows={rows} types={types} />;
};

EditableTableStory.args = {
  cols: ["No", "First Name", "Last Name", "Email", "Address"],
  types: ["number", "text", "text", "email", "text"],
  rows: [
    {
      No: 1,
      FirstName: "John",
      LastName: "Doe",
      Email: "john.doe@example.com",
      Address: "Street1",
    },
    {
      No: 2,
      FirstName: "Mary",
      LastName: "Jones",
      Email: "mary.jones@example.com",
      Address: "Street1",
    },
    {
      No: 3,
      FirstName: "Alesei",
      LastName: "Kotov",
      Email: "alex.kotov@example.com",
      Address: "Street2",
    },
    {
      No: 4,
      FirstName: "Viktor",
      LastName: "Zashev",
      Email: "viktor.zashev@example.com",
      Address: "Street2",
    },
    {
      No: 5,
      FirstName: "Nikolay",
      LastName: "Petrov",
      Email: "nikolay.petrov@example.com",
      Address: "Street3",
    },
  ],
};
