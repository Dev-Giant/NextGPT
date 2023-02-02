import FormTextArea from "@/components/FormTextArea/FormTextArea";
import ResultCopy from "@/modules/ResultCopy/ResultCopy";

const FreePrompt = () => {
  return (
    <>
      <FormTextArea label="Enter your prompt" rows={10} isRequired/>
      <ResultCopy />
    </>
  );
};

export default FreePrompt;
