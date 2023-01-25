import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./ButtonGroup.module.scss";

const ButtonGroup = () => {
  return (
    <>
      <Row className={styles.buttonGroup}>
        <Col>
          <Button className={styles.buttonGroupClearButton}>Clear</Button>
        </Col>
        <Col sm={9}>
          <Button className={styles.buttonGroupGenerateButton}>Generate</Button>
        </Col>
      </Row>
    </>
  );
};

export default ButtonGroup;