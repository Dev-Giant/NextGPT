import FormTextArea from "@/components/FormTextArea/FormTextArea";
import ResultCopy from "@/modules/ResultCopy/ResultCopy";

const TextSummary = () => {
  return (
    <>
      <FormTextArea label="Original text" rows={10} />
      <ResultCopy />
    </>
  );
};

export default TextSummary;