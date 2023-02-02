import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./Message.module.scss";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import ExampleInput from "@/components/ExampleInput/ExampleInput";
import FormInput from "@/components/FormInput/FormInput";
import FormTextArea from "@/components/FormTextArea/FormTextArea";
import ResultCopy from "@/modules/ResultCopy/ResultCopy";

const Message = () => {
  return (
    <div>
      <Card className={styles.messageCard}>
        <Row>
          <Col>
            <FormInput label="Who are you writing to" isRequired/>
            <FormTextArea label="Details" rows={7} isRequired/>
            <ButtonGroup />
          </Col>
          <Col>
            <ExampleInput />
          </Col>
        </Row>
      </Card>
      <ResultCopy />
    </div>
  );
};

export default Message;
