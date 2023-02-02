import Form from "react-bootstrap/Form";
import classNames from "classnames";
import styles from "./FormInput.module.scss";
import RequiredFieldIndicator from "../RequiredFieldIndicator/RequiredFieldIndicator";

interface FormInputProps {
  label: string;
  isRequired?: boolean;
  validationError?: string;
  className?: string;
  inputType?: string;
  placeHolder?: string;
}

const FormInput = (props: FormInputProps) => {
  return (
    <div className={classNames(styles.formStyle, props.className)}>
      <Form.Label>
        {props.label}
        {props.isRequired && <RequiredFieldIndicator />}
      </Form.Label>
      <Form.Control
        type={props?.inputType ? props?.inputType : "text"}
        placeholder={props?.placeHolder ? props?.placeHolder : ""}
      />
      {props.validationError && (
        <p className={styles.validationError}>{props.validationError}</p>
      )}
    </div>
  );
};

export default FormInput;
