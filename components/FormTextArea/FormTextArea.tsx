import Form from "react-bootstrap/Form";
import classNames from "classnames";
import styles from "./FormTextArea.module.scss";
import RequiredFieldIndicator from "../RequiredFieldIndicator/RequiredFieldIndicator";

interface FormTextAreaProps {
  label: string;
  rows: number;
  isRequired?: boolean;
  validationError?: string;
  className?: string;
  placeHolder?: string;
}

const FormTextArea = (props: FormTextAreaProps) => {
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
      />
      {props.validationError && (
        <p className={styles.validationError}>{props.validationError}</p>
      )}
    </div>
  );
};

export default FormTextArea;
