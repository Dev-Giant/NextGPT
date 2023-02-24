import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Placeholder from "react-bootstrap/Placeholder";
import { useAppSelector } from "../../src/redux/hook";
import { IRootState } from "../../src/redux/store";
import styles from "./ResultCopy.module.scss";

interface ResultCopyInterface {
  showResult: boolean;
}

const ResultCopy = (props: ResultCopyInterface) => {
  const { isLoading, openAIPost }: { isLoading: boolean; openAIPost: string } =
    useAppSelector((state: IRootState) => state.openai);
  const copy = (text: string) => () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <h4 className={styles.resultCopyResult}>Result</h4>
      <Card className={styles.resultCopyResultCard}>
        <div className={styles.resultCopyResultCardColumn}>
          {props.showResult ? (
            <>
              {isLoading ? (
                <div className={styles.resultCopyLoading}>
                  <Spinner animation="border" variant="warning" />
                  <p>Generating post in progress...</p>
                </div>
              ) : (
                <div>{openAIPost}</div>
              )}
            </>
          ) : (
            <>
              <Placeholder
                xs={3}
                className={styles.resultCopyResultPlaceHolderTitle}
              />
              <Placeholder
                xs={10}
                className={styles.resultCopyResultPlaceHolderText}
              />
              <Placeholder
                xs={12}
                className={styles.resultCopyResultPlaceHolderText}
              />
              <Placeholder
                xs={3}
                className={styles.resultCopyResultPlaceHolderText}
              />
            </>
          )}
          <div>
            <Button
              className={styles.resultCopyResultCopy}
              onClick={copy(openAIPost)}
            >
              Copy to clipboard
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ResultCopy;
