import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useAppDispatch } from "../../../src/redux/hook";
import { getOpenAIResult } from "../../../src/redux/slices/openai";
import styles from "./Message.module.scss";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import ExampleInput from "@/components/ExampleInput/ExampleInput";
import FormInput from "@/components/FormInput/FormInput";
import FormTextArea from "@/components/FormTextArea/FormTextArea";
import ResultCopy from "@/modules/ResultCopy/ResultCopy";

interface messageInterface {
  showResult: boolean;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
}

const Message = (props: messageInterface) => {
  const dispatch = useAppDispatch();
  const [receiver, setReceiver] = useState("");
  const [details, setDetails] = useState("");
  const handleGenerate = () => {
    if (receiver !== "" && details !== "") {
      dispatch(getOpenAIResult(receiver + ", " + details));
      props.setShowResult(true);
    }
  };

  const handleClear = () => {
    setDetails("");
    setReceiver("");
  };

  return (
    <div>
      <Card className={styles.messageCard}>
        <Row>
          <Col>
            <FormInput
              label="Who are you writing to"
              isRequired
              value={receiver}
              setValue={setReceiver}
            />
            <FormTextArea
              label="Details"
              rows={7}
              isRequired
              value={details}
              setValue={setDetails}
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

export default Message;
