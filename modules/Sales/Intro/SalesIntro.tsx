import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useAppDispatch } from "../../../src/redux/hook";
import { getOpenAIResult } from "../../../src/redux/slices/openai";
import styles from "./SalesIntro.module.scss";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import ExampleInput from "@/components/ExampleInput/ExampleInput";
import FormInput from "@/components/FormInput/FormInput";
import ResultCopy from "@/modules/ResultCopy/ResultCopy";

interface salesIntroInterface {
  showResult: boolean;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
}

const SalesIntro = (props: salesIntroInterface) => {
  const dispatch = useAppDispatch();
  const [author, setAuthor] = useState("");
  const [position, setPosition] = useState("");
  const [purpose, setPurpose] = useState("");
  const handleGenerate = () => {
    if (author !== "" && position !== "" && purpose !== "") {
      dispatch(getOpenAIResult("Author: " + author + ", Author's position: " + position + ", Purpose: " + purpose));
      props.setShowResult(true);
    }
  };

  const handleClear = () => {
    setAuthor("");
    setPosition("");
    setPurpose("");
  };

  return (
    <div>
      <h4 className={styles.salesIntro}>Intro Message</h4>
      <Card className={styles.salesIntroCard}>
        <Row>
          <Col>
            <FormInput
              label="Who are you writing to?"
              isRequired
              value={author}
              setValue={setAuthor}
            />
            <FormInput
              label="What's their position?"
              isRequired
              value={position}
              setValue={setPosition}
            />
            <FormInput
              label="What do we want?"
              isRequired
              value={purpose}
              setValue={setPurpose}
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

export default SalesIntro;
