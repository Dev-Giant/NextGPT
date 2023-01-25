import Form from "react-bootstrap/Form";
import classNames from "classnames";
import styles from "./FormTextArea.module.scss";

interface FormTextAreaProps {
  label: string;
  rows: number;
  className?: string;
  inputType?: string;
  placeHolder?: string;
}

const FormTextArea = (props: FormTextAreaProps) => {
  return (
    <div className={classNames(styles.formStyle, props.className)}>
      <Form.Label className={styles.textAreaLabel}>{props.label}</Form.Label>
      <Form.Control
        as="textarea"
        rows={props.rows}
        type={props?.inputType ? props?.inputType : "text"}
        placeholder={props?.placeHolder ? props?.placeHolder : ""}
      />
    </div>
  );
};

export default FormTextArea;
