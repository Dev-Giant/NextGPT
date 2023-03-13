import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./Geography.module.scss";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import ExampleInput from "@/components/ExampleInput/ExampleInput";
import FormInput from "@/components/FormInput/FormInput";
import ResultCopy from "@/modules/ResultCopy/ResultCopy";
import { useAppDispatch } from "../../../src/redux/hook";
import { getOpenAIResult } from "../../../src/redux/slices/openai";

interface geographyInterface {
  showResult: boolean;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
}

const Geography = (props: geographyInterface) => {
  const dispatch = useAppDispatch();
  const [position, setPosition] = useState("");
  const handleGenerate = () => {
    if (position !== "") {
      dispatch(getOpenAIResult("Company position: " + position));
      props.setShowResult(true);
    }
  };

  const handleClear = () => {
    setPosition("");
  };

  return (
    <div>
      <Card className={styles.geographyCard}>
        <Row>
          <Col>
            <FormInput
              label="Where are you looking for companies at?"
              isRequired
              value={position}
              setValue={setPosition}
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

export default Geography;
