import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./Geography.module.scss";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import ExampleInput from "@/components/ExampleInput/ExampleInput";
import FormInput from "@/components/FormInput/FormInput";
import ResultCopy from "@/modules/ResultCopy/ResultCopy";

const Geography = () => {
  return (
    <div>
      <Card className={styles.geographyCard}>
        <Row>
          <Col>
            <FormInput label="Where are you looking for companies at?" />
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

export default Geography;
