import Form from "react-bootstrap/Form";
import classNames from "classnames";
import styles from "./FormInput.module.scss";

interface FormInputProps {
  label: string;
  className?: string;
  inputType?: string;
  placeHolder?: string;
}

const FormInput = (props: FormInputProps) => {
  return (
    <div className={classNames(styles.formStyle, props.className)}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props?.inputType ? props?.inputType : "text"}
        placeholder={props?.placeHolder ? props?.placeHolder : ""}
      />
    </div>
  );
};

export default FormInput;
