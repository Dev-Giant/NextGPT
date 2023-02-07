import { ChangeEvent, FocusEvent, useState } from "react";

type inputProps = JSX.IntrinsicElements["input"] & {
    initialValue: string | number | Date | URL;
};

const TableInput = (props: inputProps) => {
    const { initialValue, ...restProps } = props;
    const [value, setValue] = useState(initialValue as string);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const validate = (event: FocusEvent<HTMLInputElement>) => {
        const target = event.target;
        if (!target.checkValidity()) {
            alert("You have an invalid input. Please, correct it.");
        }
    };
    return (
        <td>
            <input
                value={value}
                onChange={handleChange}
                onBlur={validate}
                {...restProps}
            />
        </td>
    );
};

export default TableInput;
