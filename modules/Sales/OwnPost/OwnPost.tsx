import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./OwnPost.module.scss";
import { useAppDispatch } from "../../../src/redux/hook";
import { getOpenAIResult } from "../../../src/redux/slices/openai";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import ExampleInput from "@/components/ExampleInput/ExampleInput";
import FormInput from "@/components/FormInput/FormInput";
import ResultCopy from "@/modules/ResultCopy/ResultCopy";

interface ownPostInterface {
  showResult: boolean;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
}

const OwnPost = (props: ownPostInterface) => {
  const dispatch = useAppDispatch();
  const [ownPost, setOwnPost] = useState("");
  const handleGenerate = () => {
    if (ownPost !== "") {
      dispatch(getOpenAIResult(ownPost));
      props.setShowResult(true);
    }
  };

  const handleClear = () => {
    setOwnPost("");
  };

  return (
    <div>
      <Card className={styles.ownPostCard}>
        <Row>
          <Col>
            <FormInput
              label="What are you writing about?"
              isRequired
              value={ownPost}
              setValue={setOwnPost}
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

export default OwnPost;
