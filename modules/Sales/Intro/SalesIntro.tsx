import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./SalesIntro.module.scss";
import ExampleInput from "../../../components/ExampleInput/ExampleInput";
import FormInput from "../../../components/FormInput/FormInput";
import ResultCopy from "../../ResultCopy/ResultCopy";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";

const SalesIntro = () => {
  return (
    <div>
      <h4 className={styles.salesIntro}>Intro Message</h4>
      <Card className={styles.salesIntroCard}>
        <Row>
          <Col>
            <FormInput label="Who are you writing to?" />
            <FormInput label="What's their position?" />
            <FormInput label="What do we want?" />
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

export default SalesIntro;
