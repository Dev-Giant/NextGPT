import "bootstrap/dist/css/bootstrap.min.css";
import type { Story } from "@ladle/react";
import FormTextArea from "@/components/FormTextArea/FormTextArea";

export const FormTextAreaStory: Story<{
  label: string;
  rows: number;
  isRequired: boolean;
  validationError: string;
  placeHolder: string;
}> = ({ label, rows, isRequired, validationError, placeHolder }) => {
  return (
    <FormTextArea
      label={label}
      rows={rows}
      isRequired={isRequired}
      validationError={validationError}
      placeHolder={placeHolder}
    />
  );
};

FormTextAreaStory.args = {
  label: "Example Form Text Area",
  rows: 5,
  isRequired: true,
  validationError: "",
  placeHolder: "Example Form Input",
};
