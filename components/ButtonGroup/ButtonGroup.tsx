import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./ButtonGroup.module.scss";

interface ButtonGroupInterface {
  handleClear?: () => void,
  handleGenerate?: () => void
}

const ButtonGroup = (props: ButtonGroupInterface) => {
  return (
    <>
      <Row className={styles.buttonGroup}>
        <Col>
          <Button className={styles.buttonGroupClearButton} onClick={props?.handleClear} >Clear</Button>
        </Col>
        <Col sm={9}>
          <Button className={styles.buttonGroupGenerateButton} onClick={props?.handleGenerate}>Generate</Button>
        </Col>
      </Row>
    </>
  );
};

export default ButtonGroup;