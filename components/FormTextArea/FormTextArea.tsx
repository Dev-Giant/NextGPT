import Form from "react-bootstrap/Form";
import classNames from "classnames";
import styles from "./FormTextArea.module.scss";
import RequiredFieldIndicator from "../RequiredFieldIndicator/RequiredFieldIndicator";

interface FormTextAreaProps {
  label: string;
  rows: number;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  isRequired?: boolean;
  validationError?: string;
  className?: string;
  placeHolder?: string;
}

/**
 * Represent FormTextArea component
 * @param props 
 * @argument label(string) - FormTextArea label
 * @argument rows(number) - number of rows at FormTextArea
 * @argument value(string) - FormTextArea value
 * @argument setValue(function) - function to change FormTextArea value
 * @argument isRequired(boolean) - make FormTextArea as required or optional
 * @argument validationError(string) - FormTextArea's error
 * @argument className(string) - FormTextArea's classNames
 * @argument inputType(string) - FormTextArea's type
 * @argument placeHolder(string) - FormTextArea's placeholder
 * @returns FormInput component with label, value and default input props
 */

const FormTextArea = (props: FormTextAreaProps) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(props?.setValue) props?.setValue(e.target.value);
  };

  return (
    <div className={classNames(styles.formStyle, props.className)}>
      <Form.Label className={styles.textAreaLabel}>
        {props.label}
        {props.isRequired && <RequiredFieldIndicator />}
      </Form.Label>
      <Form.Control
        as="textarea"
        rows={props.rows}
        placeholder={props?.placeHolder ? props?.placeHolder : ""}
        value={props?.value}
        onChange={handleChange}
      />
      {props.validationError && (
        <p className={styles.validationError}>{props.validationError}</p>
      )}
    </div>
  );
};

export default FormTextArea;
