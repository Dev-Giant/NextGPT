import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./Fit.module.scss";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import ExampleInput from "@/components/ExampleInput/ExampleInput";
import FormInput from "@/components/FormInput/FormInput";
import FormTextArea from "@/components/FormTextArea/FormTextArea";
import ResultCopy from "@/modules/ResultCopy/ResultCopy";
import { useAppDispatch } from "../../../src/redux/hook";
import { getOpenAIResult } from "../../../src/redux/slices/openai";

interface fitInterface {
  showResult: boolean;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
}

const Fit = (props: fitInterface) => {
  const dispatch = useAppDispatch();
  const [company, setCompany] = useState("");
  const [url, setUrl] = useState("");
  const handleGenerate = () => {
    if (company !== "") {
      dispatch(getOpenAIResult(company + ", " + url));
      props.setShowResult(true);
    }
  };

  const handleClear = () => {
    setCompany("");
    setUrl("");
  };

  return (
    <div>
      <Card className={styles.fitCard}>
        <Row>
          <Col>
            <FormTextArea
              label="What's the company description"
              rows={7}
              isRequired
              value={company}
              setValue={setCompany}
            />
            <FormInput
              label="URL address (optional)"
              value={url}
              setValue={setUrl}
            />
            <ButtonGroup
              handleClear={handleClear}
              handleGenerate={handleGenerate}
            />
          </Col>
          <Col>
            <ExampleInput label="Example" content="abcdef" />
          </Col>
        </Row>
      </Card>
      <ResultCopy showResult={props.showResult} />
    </div>
  );
};

export default Fit;
