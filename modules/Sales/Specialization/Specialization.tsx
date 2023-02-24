import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./Specialization.module.scss";
import { useAppDispatch } from "../../../src/redux/hook";
import { getOpenAIResult } from "../../../src/redux/slices/openai";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import ExampleInput from "@/components/ExampleInput/ExampleInput";
import FormInput from "@/components/FormInput/FormInput";
import ResultCopy from "@/modules/ResultCopy/ResultCopy";

interface specializationInterface {
  showResult: boolean;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
}

const Specialization = (props: specializationInterface) => {
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
      <Card className={styles.specializationCard}>
        <Row>
          <Col>
            <FormInput
              label="What's the name of the company?"
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

export default Specialization;
