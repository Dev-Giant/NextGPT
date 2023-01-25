import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import styles from "./ResultCopy.module.scss";

const ResultCopy = () => {
  return (
    <>
      <h4 className={styles.resultCopyResult}>Result</h4>
      <Card className={styles.resultCopyResultCard}>
        <div className={styles.resultCopyResultCardColumn}>
          <Placeholder xs={3} className={styles.resultCopyResultPlaceHolderTitle} />
          <Placeholder xs={10} className={styles.resultCopyResultPlaceHolderText} />
          <Placeholder xs={12} className={styles.resultCopyResultPlaceHolderText} />
          <Placeholder xs={3} className={styles.resultCopyResultPlaceHolderText} />
          <div>
            <Button className={styles.resultCopyResultCopy}>
              Copy to clipboard
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ResultCopy;
