import { ChangeEvent, FocusEvent, useState } from "react";

type inputProps = JSX.IntrinsicElements["input"] & {
    initialValue: string | number | Date | URL;
};

/**
 * Represent TableInput component
 * @param props 
 * @argument initialValue - init value for Editable Table Cell
 * @returns TableInput component with initialValue
 */

const TableInput = (props: inputProps) => {
    const { initialValue, ...restProps } = props;
    const [value, setValue] = useState(initialValue as string);
    
    /**
     * handleChange function
     * @param event - Change Event of Html Input Element
     * change the value of input(Editable Table Cell)
     */

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    /**
     * validate function
     * @param event  - focus event of Html Input Element
     * validate when focus on the Html Input Element and make an alert if something is wrong
     */

    const validate = (event: FocusEvent<HTMLInputElement>) => {
        const target = event.target;
        if (!target.checkValidity()) {
            alert("You have an invalid input. Please, correct it.");
        }
    };
    return (
        <td>
            <input
                aria-label={props.type}
                value={value}
                onChange={handleChange}
                onBlur={validate}
                {...restProps}
            />
        </td>
    );
};

export default TableInput;
