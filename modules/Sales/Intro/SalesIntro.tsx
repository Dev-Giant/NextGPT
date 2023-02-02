import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./SalesIntro.module.scss";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import ExampleInput from "@/components/ExampleInput/ExampleInput";
import FormInput from "@/components/FormInput/FormInput";
import ResultCopy from "@/modules/ResultCopy/ResultCopy";

const SalesIntro = () => {
  return (
    <div>
      <h4 className={styles.salesIntro}>Intro Message</h4>
      <Card className={styles.salesIntroCard}>
        <Row>
          <Col>
            <FormInput label="Who are you writing to?" isRequired/>
            <FormInput label="What's their position?" isRequired/>
            <FormInput label="What do we want?" isRequired/>
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
