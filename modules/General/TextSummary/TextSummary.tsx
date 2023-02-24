import FormTextArea from "@/components/FormTextArea/FormTextArea";
import ResultCopy from "@/modules/ResultCopy/ResultCopy";

const TextSummary = () => {
  return (
    <>
      <FormTextArea label="Original text" rows={10} isRequired/>
      <ResultCopy showResult={false} />
    </>
  );
};

export default TextSummary;
