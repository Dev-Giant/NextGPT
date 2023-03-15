import Form from "react-bootstrap/Form";

interface exampleInputProps {
  label: string,
  content: string
}

/**
 * Represents ExampleInput component
 * @param props 
 * @argument label(string) - input label
 * @argument content(string) - input content
 * @returns Static Content Component with Label
 */

const ExampleInput = (props: exampleInputProps) => {
  return (
    <>
      <Form.Label>{props.label}</Form.Label>
      <p>{props.content}</p>
    </>
  );
};

export default ExampleInput;