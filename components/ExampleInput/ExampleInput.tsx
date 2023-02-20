import Form from "react-bootstrap/Form";

interface exampleInputProps {
  label: string,
  content: string
}

const ExampleInput = (props: exampleInputProps) => {
  return (
    <>
      <Form.Label>{props.label}</Form.Label>
      <p>{props.content}</p>
    </>
  );
};

export default ExampleInput;