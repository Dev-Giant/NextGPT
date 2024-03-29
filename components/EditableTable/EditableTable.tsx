import Table from "react-bootstrap/Table";
import styles from "./EditableTable.module.scss";
import TableRow from "@/components/TableRow/TableRow"

interface editableTableProps {
    cols: string[],
    rows: unknown[],
    types: string[]
}

const EditableTable = (props: editableTableProps) => {
    return (
        <Table bordered hover className={styles.editableTable}>
            <thead>
                <tr>
                    {props.cols.map((item) => (
                        <th key={item}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    props.rows.map((item) => (
                        <TableRow data={item} key={JSON.stringify(item)} types={props.types} />
                    ))
                }
            </tbody>
        </Table>
    );
};

export default EditableTable;
