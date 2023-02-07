import TableInput from "@/components/TableInput/TableInput";

const TableRow = ({ data, types }: { data: any, types: string[] }) => {
    const rowData = Object.values(data);
    return (
        <tr>
            {rowData.map((item, index) => (
                <TableInput
                    initialValue={item as never as string | number | Date | URL }
                    key={item as string}
                    type={types[index]}
                />
            ))}
        </tr>
    );
};

export default TableRow;
