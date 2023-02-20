import "bootstrap/dist/css/bootstrap.min.css";
import type { Story } from "@ladle/react";
import FormInput from "@/components/FormInput/FormInput";

export const FormInputStory: Story<{
  label: string;
  required: boolean;
  validationError: string;
  inputType: string;
  placeHolder: string;
}> = ({ label, required, validationError, inputType, placeHolder }) => {
  return (
    <FormInput
      label={label}
      isRequired={required}
      validationError={validationError}
      inputType={inputType}
      placeHolder={placeHolder}
    />
  );
};

FormInputStory.args = {
  label: "Example Label",
  required: true,
  validationError: "",
  inputType: "text",
  placeHolder: "Example Input"
};
