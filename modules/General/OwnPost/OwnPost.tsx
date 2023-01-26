import FormTextArea from "../../../components/FormTextArea/FormTextArea";
import ResultCopy from "../../ResultCopy/ResultCopy";

const OwnPost = () => {
  return (
    <>
      <FormTextArea label="Enter your prompt" rows={10} />
      <ResultCopy />
    </>
  );
};

export default OwnPost;
