import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./OwnPost.module.scss";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import ExampleInput from "@/components/ExampleInput/ExampleInput";
import FormInput from "@/components/FormInput/FormInput";
import ResultCopy from "@/modules/ResultCopy/ResultCopy";

const OwnPost = () => {
  return (
    <div>
      <Card className={styles.ownPostCard}>
        <Row>
          <Col>
            <FormInput label="What are you writing about?" />
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

export default OwnPost;
